---
layout: post
title: How Khan Academy is using Machine Learning to Assess Student Mastery
---


The Khan Academy is well known for its extensive library of over 2600 video lessons. It should also be known for its rapidly-growing set of now 225 exercises &mdash; [outnumbering stitches on a baseball](https://khan-academy.geckoboard.com/dashboard/9820993B8EEAB10E) &mdash; with close to 2 million problems done each day.

To determine when a student has finished a certain exercise, we award _proficiency_ to a user who has answered at least 10 problems in a row correctly &mdash; known as a _streak_. Proficiency manifests itself as a gold star, a green patch on teachers' dashboard, a requirement for some badges (eg. gain 3 proficiencies), and a bounty of "energy" points. Basically, it means we think you've mastered the concept and can move on in your quest to know everything.

It turns out that the streak model has serious flaws.

First, if we define proficiency as your chance of getting the next problem correct being above a certain threshold, then the streak becomes a poor binary classifier. Experiments conducted on our data showed a significant difference between students who take, say, 30 problems to get a streak vs. 10 problems right off the bat &mdash; the former group was much more likely to miss the next problem after a break than the latter.

False positives is not our only problem, but also false negatives. One of our largest source of complaints is from frustrated students who lost their streak. You get 9 correct, make a silly typo, and lose all your hard-earned progress. In other words, the streak thinks that users who have gotten 9 right and 1 wrong are at the same level as those who haven't started.


## In Search of a Better Model
These findings, presented by one of our full-time volunteers Jace, led us to investigate whether we could construct a better proficiency model. We prototyped a constant acceleration "rocketship" model (with heavy gnomes that slow you down on wrong answers), but ultimately decided that a prudent first step would be to just abstract away the streak model with the notion of "fill up the bar".

We went from displaying the user's current streak (bug not intended; could not find another screenshot):

![Old streak bar with buggy number display](/images/old-streak-bar-nan.png)

to this:

![New progress bar empty](/images/new-streak-bar-empty.png)

and when full:

![New progress bar full](/images/new-streak-bar-full.png)

This gave us greater freedom to experiment with different underlying models without disrupting the interface. 

Conversations with the team led me to conceive of applying machine learning to predict the likelihood of getting the next problem correct, and use that as the basis for a new proficiency model. Basically, if we think you're more than \\(t\\)% likely to get the next problem correct, for some threshold \\(t\\), we'll say you're proficient.

I started off by hacking together a naive Bayes binary classifier modified to give a probability estimate. I trained this on a few days' worth of problem logs, and initial results were promising &mdash; the most striking being that fewer problem were needed to attain the same level of _accuracy_.

What do I mean by accuracy? We define it as 

$$ P(\text{next problem correct} | \text{just gained proficiency}) $$

which is just notation desperately trying to say "_Given that_ we just gained proficiency, _what's the probability of_ getting the next problem correct?"

However, naive Bayes is typically used for _classification_ &mdash; the task of determining which discrete category a data point belongs to &mdash; rather than for _regression_ &mdash; returning a continuous value (in our case, a probability estimate in \\([0,1]\\)).

So, our full-time volunteer Jace, who is much more versed in statistics and machine learning, used R to quickly prototype and evaluate different machine learning algorithms and feature sets. R is the de-facto programming language for statistical computing and comes pre-packaged with data analysis and machine learning tools.

To evaluate the different algorithms, input features, and thresholds, we came up with some metrics to gauge for desirable characteristics:

- **Mean problems done to reach proficiency** &mdash; ideally we like to minimize this so that students can spend less time rote grinding on problems they know well, and move on to other concepts.
- **\\(P(\text{next problem correct} | \text{just gained proficiency})\\)** &mdash; Unfortunately, this is hard to correctly measure in our offline data set due to the streak-of-10 bias: students may loosen up after they gain proficiency and spend less time on subsequent problems.
- **Proficiency Rate** &mdash; The percent of proficiencies attained per user-exercise pair. Again, this is hard to measure because of the streak bias.
- **Confusion matrix for predicted next problem correct** &mdash; This is for comparing binary classifiers on their accuracy in predicting the outcome of any answer in a user's response history. We build up the [confusion matrix](http://en.wikipedia.org/wiki/Confusion_matrix), and from that extract [two valuable measures](http://en.wikipedia.org/wiki/Sensitivity_and_specificity) of the performance of a binary classifier.

We tested various models, including naive Bayes, support vector machines, a simple 10-out-of-last-11-correct model, and logistic regression. Based on the metrics above, we settled on...


## Using Logistic Regression as a Proficiency Model

(Feel free to skip this section if you're not technically inclined.)

Logistic regression is usually used as a classifier that gives a reasonable probability estimate of each category &mdash; exactly our requirement. It's so simple, let's derive it.

Let's say we have the values of \\(n\\) input features (eg. percent correct), and we stuff them into a vector \\(\textbf{x}\\). Let's say we also happen to know how much each feature makes it more likely that the user is proficient, and stuff those weights into a vector \\(\textbf{w}\\). We can then take the weighted sum of the input features, plus a pre-determined constant \\(w\_0\\) to correct for any constant bias, and call that \\(z\\):

$$ z = w\_0 + \sum\_{i=1}&#94;n w\_ix\_i $$

Now if we set \\(x\_0 = 1\\), we can write that compactly as a linear algebra dot product:

$$ z = \mathbf{w}&#94;T\mathbf{x} $$

Already, you can see that the higher \\(z\\) is, the more likely the user is to be proficient. To obtain our probability estimate, all we have to do is "shrink" \\(z\\) into the interval \\((0,1)\\). We want negative values of \\(z\\) to map into \\((0, 0.5)\\) and positive values to fall in \\([0.5, 1)\\). We can do this by plugging \\(z\\) into a sigmoid function &mdash; in particular, we'll use the logistic function:

$$ h(z) = \frac{1}{1+e&#94;{-z}} $$

And that's it! \\(h(z)\\) is the probability estimate that logistic regression spits out.
  
The tricky bit is in determining the values of the weight vector \\(\textbf{w}\\) &mdash; that is, training logistic regression so that \\(h\\), aka. the hypothesis function in machine learning terminology, gives us a good probability estimate. For brevity I'll spare you the details, but suffice to know that there are plenty of pre-written libraries to do that.

So that raises the question, which features did we use?

- `ewma_3` and `ewma_10` &mdash; Exponentially-weighted moving average. This is just math-talk for an average where we give greater weight to more recent values. It's handy because it can be implemented recursively as \\( S\_t = \alpha \times y + (1 - \alpha) \times S\_{t-1} \\), where \\(\alpha\\) is the weighting factor, \\(y\\) is the most recent value, and \\(S\_{t-1}\\) is the previous exponential moving average. We set \\(\alpha\\) to 0.333 and 0.1 for `ewma_3` and `ewma_10` respectively.
- `current_streak` &mdash; This turned out to be a rather weak signal and we'll be discarding it in favour of other features in the future.
- `log_num_done` &mdash; \\(\log(\text{number of problems done})\\). We don't try to predict until at least one problem has been done.
- `log_num_missed` &mdash; \\(\log(\text{number of problems missed} + 1)\\)
- `percent_correct` &mdash; \\(\frac{\text{number of problems correct}}{\text{number problems done}}\\)

As for the proficiency threshold, we chose 94% based on our metrics.

Now for some Python code. To compute the exponentially-weighted moving average:

{% highlight python linenos %}
def exp_moving_avg(self, weight):
    ewma = EWMA_SEED

    for i in reversed(xrange(self.total_done)):
        ewma = weight * self.get_answer_at(i) + (1 - weight) * ewma

    return ewma
{% endhighlight %}

and for the actual logistic regression hypothesis function:

{% highlight python linenos %}

class AccuracyModel(object):

    # ... snip ...

    def predict(self):
        """
        Returns: the probabilty of the next problem correct using logistic
            regression.
        """

        # We don't try to predict the first problem (no user-exercise history)
        if self.total_done == 0:
            return PROBABILITY_FIRST_PROBLEM_CORRECT

        # Get values for the feature vector X
        ewma_3 = self.exp_moving_avg(0.333)
        ewma_10 = self.exp_moving_avg(0.1)
        current_streak = self.streak()
        log_num_done = math.log(self.total_done)
        log_num_missed = math.log(self.total_done - self.total_correct() + 1)
        percent_correct = float(self.total_correct()) / self.total_done

        weighted_features = [
            (ewma_3, params.EWMA_3),
            (ewma_10, params.EWMA_10),
            (current_streak, params.CURRENT_STREAK),
            (log_num_done, params.LOG_NUM_DONE),
            (log_num_missed, params.LOG_NUM_MISSED),
            (percent_correct, params.PERCENT_CORRECT),
        ]

        X, weight_vector = zip(*weighted_features)  # unzip the list of pairs

        return AccuracyModel.logistic_regression_predict(
            params.INTERCEPT, weight_vector, X)

    # See http://en.wikipedia.org/wiki/Logistic_regression
    @staticmethod
    def logistic_regression_predict(intercept, weight_vector, X):
        # TODO(david): Use numpy's dot product fn when we support numpy
        dot_product = sum(itertools.imap(operator.mul, weight_vector, X))
        z = dot_product + intercept

        return 1.0 / (1.0 + math.exp(-z))

{% endhighlight %}

There's another interesting problem here &mdash; how do you display that probability value on the progress bar? We try to linearize the display and distribute it evenly across the bar. Since it's 4 am right now, I'll just give you the code for it (it's well-commented) and won't make any helpful explanatory graphs (unless people request it ;)).

{% highlight python linenos %}

class InvFnExponentialNormalizer(object):
    """
    This is basically a function that takes an accuracy prediction (probability
    of next problem correct) and attempts to "evenly" distribute it in [0, 1]
    such that progress bar appears to fill up linearly.

    The current algorithm is as follows:
    Let
        f(n) = probabilty of next problem correct after doing n problems,
        all of which are correct.
    Let
        g(x) = f^(-1)(x)
    that is, the inverse function of f. Since f is discrete but we want g to be
    continuous, unknown values in the domain of g will be approximated by using
    an exponential curve to fit the known values of g. Intuitively, g(x) is a
    function that takes your accuracy and returns how many problems correct in
    a row it would've taken to get to that, as a real number. Thus, our
    progress display function is just
        h(x) = g(x) / g(consts.PROFICIENCY_ACCURACY_THRESHOLD)
    clamped between [0, 1].

    The rationale behind this is that if you don't get any problems wrong, your
    progress bar will increment by about the same amount each time and be full
    right when you're proficient (i.e. reach the required accuracy threshold).
    """

    def __init__(self, accuracy_model, proficiency_threshold):
        X, Y = [], []

        for i in itertools.count(1):
            accuracy_model.update(correct=True)
            probability = accuracy_model.predict()

            X.append(probability)
            Y.append(i)

            if probability >= proficiency_threshold:
                break

        self.A, self.B = exponential_fit(X, Y)
        # normalize the function output so that it outputs 1.0 at the
        # proficency threshold
        self.A /= self.exponential_estimate(proficiency_threshold)

    def exponential_estimate(self, x):
        return self.A * math.exp(self.B * x)

    def normalize(self, p_val):
        # TODO(david): Use numpy clip
        def clamp(value, minval, maxval):
            return sorted((minval, value, maxval))[1]

        return clamp(self.exponential_estimate(p_val), 0.0, 1.0)

{% endhighlight %}

Now, until Google App Engine supports NumPy, the implementation for `exponential_fit` is just the [derivative of the least-squares cost](http://mathworld.wolfram.com/LeastSquaresFittingExponential.html).

The full, uncut, unaltered code is available at our [Kiln repo](https://khanacademy.kilnhg.com/Repo/Website/Group/stable/Files/accuracy_model).


## Showdown: Logistic Regression <img alt="vs." src="/images/showdown-swords.png" id="showdown-swords"> The Streak

The metrics may tell us that logistic regression wins, but being the illogical, squishy human beings that we are, we yearned for an intuitive understanding of the unique behaviour of the different models. I developed an internal tool to simulate exercise responses and visualise the prediction of different models. Here's a highlight reel of the salient characteristics.

As expected, order matters. Both models will weigh problems done more recently higher than earlier problems. What may be surprising is the relative importance:

![Position Matters](/images/answer-history-position-matters.png)

Logistic regression seems to care much less than streak.

Both models monotonically increase confidence the more responses of the same type they receive:

![More positives increase likelihood of correct response](/images/answer-history-length-confidence.png)

Logistic regression also recognises consistently spotty performance:

![Longer alternating right-wrongs makes logistic regression sadder](/images/answer-history-consistently-spotty.png)

Logistic regression takes into account prior performance. So, getting lots correct is always a good thing, and you'll be able to recover faster from a wrong answer if you were previously doing well. Contrast with the streak model, which loses all memory after a single incorrect answer.

![Initial correct answers allow for an easier recovery](/images/answer-history-percent-correct-recovery.png)

This could also work against you. If you've gotten lots of wrong answers, you'll need to do more work to convince logistic regression that you're actually competent. This mitigates one of the issues we had with the streak, where we found that there was a significant difference in actual proficiency for those getting a streak immediately vs. after 30 problems.

![Multiple wrong answers will count](/images/answer-history-wrongs-count.png)

Could this be overly harsh for struggling students? That's a question we are actively investigating, and as a stopgap measure we only keep the last 20 problems as history. This compromise has an insignificant effect on logistic regression's predictive accuracy, but it lets us sleep knowing that a student will not be damned for life if they were doing some unusual exploration and got 10 problems in a row wrong.

Due to 4 am, I don't have an interactive demo on this page, but it won't be hard to add it. If you would like to play with this please say so.


## Results

This was a fairly large change that we, understandably, only wanted to deploy to a small subset of users. This was facilitated by [Bengineer Kamen's GAE/Bingo split-testing framework for App Engine](http://bjk5.com/post/10171483254/a-bingo-split-testing-now-on-app-engine-built-for-khan). Crucially, it allowed us to measure conversions as a way of gathering more accurate statistics on actual usage data.

The experiment has been running for 6 days thus far with 10% of users using the new logistic regression proficiency model. Before I reveal anything else, see a screenshot of GAE/Bingo in action (from a few hours ago):

![Proficiency gained all - 228.97% (streak) vs 268.42% (accuracy)](/images/ab-test-proficiency-gained-all.png)

The graph above shows the results over time, so you can see when trends have stabilised.

Now what you've been waiting for, our current statistics (5 am PST, Nov. 2) show that, for the new model, we have:

- 20.8% more proficiencies earned:

<div id="proficiencies-earned-chart"></div>
<script>
  new Highcharts.Chart({
    chart: {
      renderTo: 'proficiencies-earned-chart',
      type: 'bar',
      height: 200
    },
    legend: { enabled: false },
    credits: { enabled: false },
    title: {
      text: 'Proficiencies Earned per User'
    },
    xAxis: {
      categories: ['Streak', 'Accuracy']
    },
    yAxis: {
      title: {
        text: 'Total proficiencies earned / number of participants in group'
      }
    },
    series: [{
      data: [2.4205, 2.9237]
    }]
  });
</script>

- 15.7% more new exercises attempted:

<div id="new-exercises-chart"></div>
<script>
  new Highcharts.Chart({
    chart: {
      renderTo: 'new-exercises-chart',
      type: 'bar',
      height: 200
    },
    legend: { enabled: false },
    credits: { enabled: false },
    title: {
      text: 'New Exercises Attempted per User'
    },
    xAxis: {
      categories: ['Streak', 'Accuracy']
    },
    yAxis: {
      title: {
        text: 'Total new exercises attempted / number of participants in group'
      }
    },
    series: [{
      data: [2.9843, 3.4533]
    }]
  });
</script>

- 4.4 less problems done (26% less) per proficiency:

<div id="problems-per-proficiency-chart"></div>
<script>
  new Highcharts.Chart({
    chart: {
      renderTo: 'problems-per-proficiency-chart',
      type: 'bar',
      height: 200
    },
    legend: { enabled: false },
    credits: { enabled: false },
    title: {
      text: 'Problems Done per Proficiency'
    },
    xAxis: {
      categories: ['Streak', 'Accuracy']
    },
    yAxis: {
      title: {
        text: 'Total proficiencies gained / total problems done'
      }
    },
    series: [{
      data: [16.8, 12.4]
    }]
  });
</script>

- Essentially the same accuracy at proficiency:

<div id="accuracy-at-proficiency-chart"></div>
<script>
  new Highcharts.Chart({
    chart: {
      renderTo: 'accuracy-at-proficiency-chart',
      type: 'bar',
      height: 200
    },
    legend: { enabled: false },
    credits: { enabled: false },
    title: {
      text: 'Accuracy - P(next problem correct | just gained proficiency)'
    },
    xAxis: {
      categories: ['Streak', 'Accuracy']
    },
    yAxis: {
      title: {
        text: 'Total problems correct right after proficiency / total "does problem right after proficiency"'
      }
    },
    series: [{
      data: [0.951, 0.949]
    }]
  });
</script>

- Higher accuracy attained among a set of 3 pre-chosen easy problems. Jace came up with this statistic to gauge any actual differences in learning. The basic idea is: If accuracy as determined by logistic regression is a good approximation of competence, then higher attained accuracies would be indicative of greater competence. Note the precipitous drop at 94% for the accuracy model &mdash; this is due to the proficiency threshold set at 94% for logistic regression, so once a user reaches that level, we tell them to move on. (A streak of 10 with no wrong answers nets an accuracy of 96.7%.)

<div id="easy-accuracy-distribution-chart"></div>
<script>
  new Highcharts.Chart({
    chart: {
      renderTo: 'easy-accuracy-distribution-chart',
      type: 'column',
      height: 300
    },
    legend: { enabled: true },
    credits: { enabled: false },
    title: {
      text: 'Easy Problems - Distribution of Accuracy Attained'
    },
    xAxis: {
      title: {
        text: 'Accuracy Attained'
      }
    },
    yAxis: {
      title: {
        text: 'Percent of Users'
      },
      max: 0.13,
      endOnTick: false
    },
    series: [{
      name: 'Streak',
      data: [[0.85, 0.1064], [0.9, 0.1052], [0.92, 0.1029], [0.94, 0.0973], [0.96, 0.0844]]
    }, {
      name: 'Accuracy',
      data: [[0.85, 0.1207], [0.9, 0.1200], [0.92, 0.1195], [0.94, 0.1181], [0.96, 0.0272]]
    }]
  });
</script>

- Slightly higher accuracy attained for a set of 10 pre-chosen hard problems. Going above and beyond the call of duty seems much less popular here, among accuracy model participants.

<div id="hard-accuracy-distribution-chart"></div>
<script>
  new Highcharts.Chart({
    chart: {
      renderTo: 'hard-accuracy-distribution-chart',
      type: 'column',
      height: 300
    },
    legend: { enabled: true },
    credits: { enabled: false },
    title: {
      text: 'Hard Problems - Distribution of Accuracy Attained'
    },
    xAxis: {
      title: {
        text: 'Accuracy Attained'
      }
    },
    yAxis: {
      title: {
        text: 'Percent of Users'
      },
      max: 0.05,
      endOnTick: false
    },
    series: [{
      name: 'Streak',
      data: [[0.85, 0.0464], [0.9, 0.0433], [0.92, 0.0395], [0.94, 0.0326], [0.96, 0.0193]]
    }, {
      name: 'Accuracy',
      data: [[0.85, 0.0473], [0.9, 0.0441], [0.92, 0.0407], [0.94, 0.0392], [0.96, 0.0025]]
    }]
  });
</script>

- P(do another problem | just answered incorrectly) not affected
- 11.7% more proficiencies earned for the hard problems
- 14.8% more proficiencies earned for the easy problems
  
In high level terms, we increased overall interest &mdash; more new exercises attempted, fewer problems done per proficiency &mdash; without lowering the bar for proficiency &mdash; P(next problem correct | just gained proficiency) was roughly the same for both groups. Further, it seemed that overall learning, as measured by the distribution of accuracies obtained, went up slightly under the new model.

Optimistically, we hypothesise that our gains are from moving students quicker off exercises they're good at, while making them spend more time on concepts in which they need more practice. To confirm or deny this...


## In the Pipeline

...we will look into truly where the new proficiencies are coming from. We are also interested in seeing if there is any variation in knowledge retention &mdash; in particular, we want to know if P(next problem correct | took a few days break) is affected.

This is just the end of the beginning for us. We wish to investigate and possibly implement:

- Stochastic gradient descent for online learning of logistic regression
- ...which would allow adaptive models per user and per exercise. Should we bump up the proficiency threshold for users who find the exercises too easy?
- On a similar note, could we define a fitness function that takes into account both accuracy and student frustration, and find the optimal time to tell the student to move on? Could this allow us to maximize student learning by maximizing accuracy across many exercises?
- Model improvements. Here are some things we still need to try:
  - Incorporate more features, such as time spent per problem, time since last problem done, and user performance on similar exercises.
  - Experiment with non-linear feature transformations and combinations. Eg. \\(\frac{ewma}{\log(1-ewma)}\\)
  - Along with the above, apply regularization to prevent overfitting (thanks [Andrew Ng and ml-class](http://www.ml-class.org/)!)
  - Train and use separate models for the first 5 problems vs. those after that.

This work to create an accurate predictor has many other applications than just to power the proficiency meter:

- Determine if the user is struggling, and if so suggest a video to watch, using some hints, or taking a break.
- Determine the optimal date to schedule a review for spaced repetition learning.
- Tailor a custom mixed-question review session that addresses weak areas.

Stay tuned for a continuation blog post if we find more interesting results!


## Obligatory Recruiting Plug

Think you can do better? Well, I agree! I'm sure you know lots of ways to improve what we did. Good news: we're open-source and hiring!

We welcome contributors to our [exercises and exercise framework on GitHub](https://github.com/Khan/khan-exercises). Some of our best exercises were created by volunteers: check out this awesome [derivative intuition exercise](http://www.khanacademy.org/exercises?exid=derivative_intuition) created by Bengineer Eater.

Another reason I love working at the Khan Academy is the [passionate and talented team](http://www.khanacademy.org/about/the-team). Our lead developer, [Bengineer Kamens](http://www.bjk5.com), is committed to our productivity and well-being. He Bengineers internal refactorings, tools, and spends much of his time getting new developers up to speed. Without his Bengineering, it would not have been possible to collect all this interesting data. Also, if you ever have a question about jQuery, you could just ask John Resig here.

Do you want to make 0.1% improvements in ad click-thru rates for the rest of your life, or come with us and [change the world of education](http://www.khanacademy.org/jobs)?

Also, if you were wondering, we are not based in the UK, Canada, or Australia... my Canadian heritage compels me to spell "-our" and "-ise" when it's not code. :P


<script src="https://d3eoax9i5htok0.cloudfront.net/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
