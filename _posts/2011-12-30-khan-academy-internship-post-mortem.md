---
layout: post
title: On my Internship at Khan Academy
---


if you don't want to watch the videos, you  can also read the transcript below, to which i've also annotated oratory presentation, so you can.... XXX

---

# proficiency model intro
1.5 minutes

Once upon a time on the internet, there was rage. Sir Rage was learning geometry on Khan Academy -- and was on his tenth problem, correctly answering the previous 9 -- when he forgot to multiply pi by 2 and got it wrong. This caused Sir Rage to rage, for you see, to be considered proficient and move on, one had to get a streak of 10 right answers in a row. Having now to restart from the very beginning, with all his prior progress erased, as if he had not even done a single problem, brought his anger to a boil. F7U12, he hissed.

The story of Sir Rage was unfortunately too common here at Khan Academy. There were other problems, and an analysis performed by comrade Jace, a full-time volunteer, revealed that those students who didn't make a single mistake to get 10 in a row were much more likely to get a problem correct when coming back to the exercise after a few days break, over those who took 30 problems to get a streak.

You could think of the sad tale of Sir Rage as an actual proficiency, misjudged as non-proficient -- a false negative. On the other hand, the trends in our data also show that we are, perhaps, wrongly letting through some users that are probably not actually proficient -- false positives. These can be thought of as classification errors in the streak, which can be thought of as just a poor binary classifier.

Since those dark ages, we've trashed the streak.

Together with comrade Jace, we developed a machine learning algorithm that would take into account different features, including weighted moving averages, your current streak (which turned out to be a very weak feature), the logarithm of the number of problems you've correctly done, the logarithm of the number of wrong answers, and your percent correct so far. These inputs are fed into a simple mathematical function which spits out the likelihood that you'll get the next problem correct. If that number is above 94%, we say you're proficient. To fit the parameters of this function so it makes accurate predictions, comrade Jace trained it in the statistical programming language R.

It turns out that under this model, we can more intelligently allocate your time, letting you just do a minimum of just 5 problems on something you know very well while giving you the chance to do more practice on exercises where you actually need it.

From our A/B test results which we ran for two weeks, we found

21% more proficiencies earned,

16% more new exercises attempted,

an average of X XXX problems done per proficiency vs. Y XXX,

So it seems we might have made it easier to get proficiency, but did we lower the bar for proficiency?

Well, it turns out that the likelihood of getting the next problem correct after gaining proficiency, for both models, is around 95%. If we look at your chance of getting a problem correct after taking a minimum of two days' break, there's actually a slight increase from  X XXX% to Y YYY%.

So, does this tale end happily ever after? Not yet. This is just the first step in our journey to improve our assessment accuracy and make our users happier. We have lots of more ideas from commenters and users, and perhaps you may have some too.



---

# Things I did
1.5 min

Here's some other interesting things spawned by my internship at Khan Academy.

To motivate developers, we now have a dashboard showing various statistics about our exercise usage with some random trivia facts.
__pan of Geckoboard dashboard__
Here's my terrible attempt at drawing it.

Comrade Marcos and I then formed an alliance to confront the dilemma of streak frustration as described earlier. We brainstormed some crazy ideas and finally prototyped a momentum model, where you would gain speed and your progress would increase the more problems correct you did.

The wise comrade Desmond had the good judgement that led us to realize that we didn't know if this would improve behaviour, if this would actually reduce frustration, if this would , basically, we didn't know if this was going to be a good change or not, we didn't know what we were doing, and we didn't even know, what, concretely, we would use to measure success. So we took the prudent first step of just abstracting away the streak, moving the bar back most of the way on incorrect answers instead of fully, but keeping the underlying streak model unchanged. This let us fool around with the underlying model without necessitating UI changes. Some discussions with comrade Jace and our vision of a more statistically sound model that fit the data led me to realize that this could be a promising application of machine learning. So, I played around with this idea and hacked up and fitted a Naive Bayes classifier, modified to give us probability estimates, of P(next correct). There were some interesting results, and comrade Jace and I joined forces to produce the first iteration of a model that will attempt to accurately predict likelihood of success for user. Comrade Jace was much more experienced in these matters and quickly tested and evaluated a whole bunch of different algorithms in R, including SVMs, naive Bayes, logistic regression, and maybe others that he's keeping secret from me, culminating with my implementation of logistic regression in our Python back-end to use as an accuracy model.

I also built a tool to be able to better understand and evaluate our proficiency models. It allowed us to visually side-by-side compare different models, plot pretty graphs and ROC curves. It served as a complement to prototyping and testing in R.
__screenshots of ROC curves and graphs__

Before concluding the proficiency model experiments, we wanted to know if there would be any impact on long-term knowledge retention. [This was not part of our A/B test conversion tests, so ] I hacked together a script to download two weeks' worth of problem logs and analyze them with a map reduce script. [Since it was just few weeks' data, we just ended up running on one computer which finished in a reasonable amount of time.]

I also added a UI to be able to go through all the problems you had in review at once, with the existing, simple spaced repetition algorithm. This gives us a working base on which to add game mechanics and a fancy algorithm that attempts to maximize knowledge retention while minimizing the amount of time you're spending. I really have to thank Bengineer Kamens here for having the great foresight to recommend chunking this out into smaller shippable components, rather than roll it out all at once, as getting usage info allows us to better determine what and how much game mechanics to add, and the mixed-exercise review mode gives better data to fit the fancier algorithms. (XXX % increase in review problems done). It also let us ship comfortably before my internship was over, so I had time to get some usage stats, fix bugs, and some minor tweaks / cleanup.
__review demo here?__

I also assisted comrade Jace with attempting to increase our hint usage. After testing out and trying a few different alternatives, we ended up with a 50% increase in overall hint usage. (It was comrade Jace who did the majority of the work in verifying and ensuring data correctness, rooting out at least three bugs from one of the alternatives causing anomalies in the data.)

Smarter and more prolific interns have accomplished more impressive feats, such as building the framework that powers all of our exercises with John Resig. [I feel like I'm getting undeserved recognition for making this video,] I hope they will make videos of their experiences too.



---

# Awesome things about working at KA

[2 min]

But you know what, it's much more interesting to talk about why you should be an intern at Khan Academy than what I did.

## The ship and her crew

Ship. Ship. Ship. Ship. Ship. Ship. Ship. Ship. [low mmmmm-ushroom] Mushroom. [higher] Mushroom. Shipping beats perfection. That's what we live by. Continuous deployment and fast iterations is a wonderful thing: to be able to see what you were just working on on the live site and have an impact in 3 minutes, seen by millions of users, is an exhilarating, addictive feeling. I had the freedom to do this any time of any day of the week, and it turned out that 3 am Saturdays was one of my favourite times to get stuff done and deploy. [The flexibility is liberating, but also allowed my schedule to drift from biking to work at 9:30 am at the start of my internship to 2 pm.]

The crew has been very supportive and helpful. For example, there wasn't an A/B split-testing framework for App Engine, so comrade Bengineer Kamens built one in a weekend and open-sourced it on GitHub. It has led to all those juicy statistics I've been telling you and is really a joy to use. We actively code review every non-trivial commit in an effort to maintain a clean, readable, and consistent code base. Also, John Resig is famous.

I learned a lot from them, including machine learning, UI design, good coding practices, blog post writing, recruiting (I tried to counter-recruit the engineer-recruiters at the Stanford Career fair; that was an epic fail), and of course all the languages and technologies we use.

As an intern, you're going to be given massive amounts of autonomy, and with that, massive amounts of responsibility. We've all made inch-by-inch improvements anywhere on the site because we saw a need and just did it. [The Naive Bayes prototype was something I hacked up as an experiment.] [The only difference between an intern and a full-time is you're going back to school in a few months; there's no distinction otherwise.] You're a full-time while there -- you are part of the decision-making process, help flesh out projects, help shape the company, and be an integral part of the core team. We're a non-profit start-up, and what you do will directly affect the future of Khan Academy. You're not just responsible for awesome code. You're not just responsible for awesome features. What we want to accomplish through all this is to help our users learn and ultimately make the world a better place.
__writing john cormack's piece of brilliant code__



## Perks

It's a lot of responsibility, but we have fun doing it. We're just a few blocks away from Laser Tag. Every Wednesday, we have intense board game nights. Being in downtown Mountain View, we're in the midst of a mountain of food and are close to Silicon Valley meet-ups. We pay very well for interns, competitive with large companies such as Facebook.
We have weekly picnics with Sal Khan and the entire team, and you may get to have 1-on-1 walks with Sal to discuss mathematics, your views on education, ask him questions, anything.

Another cool thing is that we're completely open-sourced (hosted between GitHub and Kiln) and encourage transparency. So, you can build up a portfolio of cool code and projects and show off to your mom what you did. [You can even stay involved when you go back to school.] I got to write a blog post as part of my job, and it became my first real post. It hitched a free ride on the Khan Academy karma train. I received some very useful and insightful comments; in fact, the algorithm we're using to power our coming-up optimal scheduling and ordering of reviews is from a paper suggested by a commenter, one johnfranklin1299.

We also get to visit nearby schools who have adopted Khan Academy, and it feels great to see a change you made directly benefiting users.



## Impact

Users. As a non-profit organization, that is and always will be our number one priority. Not shareholders, not search engines, not profits, and certainly not TechCrunch.
Your code will directly impact millions of users -- we have over 100 million video views and close to 2 million problems done per day. [This makes A/B tests really exciting to watch as you see conversions quickly climb to thousands in a few minutes.]

We face some of the hardest challenges. Is the traditional model of education broken?

Well, why must I learn at the same rate as those my age, when I'm still struggling with basic algebra, or if I'm a second grader about to finish all the calculus modules on Khan Academy (true story)?

Why must I make the choice between listening to the professor vs. taking notes? Why should the professor have to talk at a half-empty room of sleep-deprived teenagers, many of whom can't keep up while others find the pace too slow?

Could we use data and machine learning to figure out exactly how to advance each and every student past a particular concept?

Why shouldn't learning be as engaging as World of Warcraft?

Why do we see learning as something kids do, and not as a lifelong pursuit in and of itself?

Why should a high quality education only be limited to those born into privileged families?

How many other Srīnivāsa Rāmānujans are out there, held back by their poverty, just waiting to be discovered?
__ramaujan with quotes and formulae. see redditor image__

I want to teach **ALL** the humans! Teach them **ALL** the things!

Education is a pillar that underlies modern achievements and quality of life. We owe all our progress to standing on the shoulders of giants. You know, I'm not a genius. I'm not smart enough to solve world hunger, societal prejudices, cultural clashes, war, the energy crisis, global warming, diseases, cancer, [higher and higher pitch.] [low and slow] But if I can maximize the potential of geniuses that are capable of tackling these problems, then I will have lived a satisfied life.


---

# conclusion
[20 seconds]

If we want to make this dream a reality, we need the help of motivated, talented developers who get things done. So I ask of you, what do you look for in an internship? Work with talented developers? Gain experience and learn? Money? Food and events? Make friends and have fun? Tackle challenging technical problems? Make an impact?

Comrade Zoidberg says, why not Khan Academy?

Thank you Khan Academy for an awesome internship, and I hope you, dear viewer, will consider joining us one day.



# one more thing
[20 seconds]

Oh wait a minute, there is one more thing. We just got a flying shark that will eat you up if you look at it wrong! It actually swims through the air. The shark is not a lie.

[If that is not the straw that breaks your camel's back, then please let us know what will.]

To make up for my non-existent drawing and oratory abilities, I can highly recommend watching Sal Khan's TED Talk or Vi Hart's videos on mathematical doodling.

__vi hart stuff, TED logo__
