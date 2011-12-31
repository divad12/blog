---
layout: post
title: On my Internship at Khan Academy
---

---

## proficiency model intro
1.5 minutes

Once upon a time on the internet, there was rage. Sir Rage was learning geometry on Khan Academy, when he forgot to multiply pi by 2 and got a problem wrong. Now, to be considered proficient and move on, one had to get 10 right answers in a row. Having now to restart from the very beginning, with his prior streak of 9 completely erased, brought his rage to a boil. F7U12, he hissed.

There were other problems. Our data showed that those who took 30 problems to get a streak performed much worse after a break than those who got a streak in 10.

Those are two classification errors --- requiring some users to do too many problems, while letting through some users who may need more practice.

What did we do about this?

Comrade Jace and I developed a machine learning algorithm that takes into account two weighted moving averages, current streak, number of correct answers, number of wrong answers, and percent correct. These inputs are fed into a function which spits out how likely you are to get next problem correct. Above 94% and we say you're proficient. Comrade Jace used the statistical language R to to fit the parameters of this function so it makes accurate predictions.

Now, you do just 5 problems on what you're familiar with, while getting the chance to do more practice where it's actually needed.

For two weeks we tested with 10% of users, and found

21% more proficiencies earned,

16% more new exercises attempted,

and a reduction from 16.8 problems done per proficiency to 12.4.

But did we lower the bar for proficiency?

Well, it turns out that for both models accuracy is 95% after proficiency. After a break, users proficient under the new model tend to perform slightly better.

So, does this tale end happily ever after? Not yet. This is the first step in our journey to improve assessment accuracy and make users happier.


---

## Things I did
1.5 min

Here's some other things spawned by my internship at Khan Academy.

To endlessly fascinate, we now have a dashboard of statistics about our exercise usage with random trivia facts mixed in.
__pan of Geckoboard dashboard__

Now, we actually went through a few iterations in our attempt to improve the streak. We started with a constant acceleration, momentum model, but decided to just launch a UI change that abstracted away the streak and a more visually forgiving bar. For the model changes, we wanted to factor in Comrade Jace's statistical findings on our data. That seemed like a promising application of machine learning, so I trained a Naive Bayes classifier that yielded interesting results. Comrade Jace, being much more experienced in machine learning, then joined forces to produce the logistic regression model that we launched.

In the process I built a tool to allow us to better understand and evaluate different models, with pretty graphs and interactive simulations.
__screenshots of ROC curves and graphs__

After the partial launch of the new proficiency model, we wanted to study impact on long-term knowledge retention. So, I hacked together a script to download analyze problem logs with a map reduce.

I built a UI to go through review problems, which are proficient exercises that you haven't done in a while. From here we can add game mechanics and an optimal scheduling algorithm.
__review demo here?__

Comrade Jace and I also collaborated to produce a 55% increase in hint usage.

Now, I really hope the smarter interns make videos of what they did too, such as building the framework that powers all our exercises with comrade John.


---

## Awesome things about working at KA

[2 min]

But you know what, I'd rather talk about why _you_ should intern at Khan Academy, so I'll have go at that.

### The ship and her crew

Ship. Ship. Ship. Ship. Ship. Ship. Ship. Ship. [low mmmmm-ushroom] Mushroom. [higher] Mushroom. Our naval culture is one of fast iterations and continuous deployment. To see your last hour's work on the live site in 3 minutes, impacting millions of users, has literally had me jumping up and down. I could do this any time of any day. As long as I got stuff done, how long I worked or when I came in was immaterial.

The helpful crew was helpful. For example, Google App Engine had no A/B split-testing framework, so comrade Bengineer Kamens built one in a weekend. __github gaebingo__ It has led to all those juicy statistics I've been telling you and is a joy to use. We code review all non-trivial commits to maintain a clean and consistent code base. __kiln__ I've learned a lot here, such as ML, UI design, good coding practices, blog post writing, and --- of course --- all the languages and technologies we use. Also, comrade John Resig is [low to high] famous.

Interns are given massive amounts of autonomy, and with that, responsibility. We've all made inch-by-inch improvements anytime we saw a need and just did it. You're an integral part of the core team of a non-profit startup --- make decisions, flesh out projects, and directly shape the future of Khan Academy. You're not just responsible for awesome code. You're not just responsible for awesome features. What we want to accomplish by doing this is to make the world a better place by redefining education.
__writing john cormack's piece of brilliant code?__


### Perks

It's a lot of responsibility, but we have fun doing it. We're just a few blocks away from Laser Tag. We have intense board game nights every week. Being in downtown Mountain View, we're surrounded by a mountain of food. We pay very well for interns, competitive with Facebook. We have weekly company picnics, and you may enjoy 1-on-1 walks with Sal to discuss mathematics, your views on education, ask him questions, anything.
__more art here?__

We're also completely open-sourced on GitHub and Kiln and encourage transparency. So, you can build up a portfolio of cool code and projects to show your mom. I got to write a blog post as part of my job, and it hitched a free ride on the Khan Academy karma train. I've received many useful and insightful comments, among which is an algorithm we're planning to use for optimal review scheduling.

We also get to visit schools that have adopted Khan Academy, and it feels great to see your work directly benefiting users.


### Impact

Users, our number one priority. Not shareholders, not search engines, not profits, not TechCrunch. We have over 100 million video views and close to 2 million problems done per day.

In redefining education we face some of the hardest challenges.

Why must I learn at the same rate as those my age, when I'm still struggling with basic algebra, or if I'm a second grader about to conquer calculus on Khan Academy (true story)?

Why can't we figure out exactly how to advance each and every student past a particular concept?

Why shouldn't learning be as engaging as World of Warcraft?

Why is learning something kids do, and not a lifelong pursuit in and of itself?

Why should quality education be denied to the underprivileged?

How many other Srīnivāsa Rāmānujans are out there, held back by their poverty, just waiting to be discovered?
__ramaujan with quotes and formulae. see redditor image__

I want to teach **ALL** the humans! Teach them **ALL** the things!

Education is a pillar that underlies our modern quality of life. I'm not a genius. I'm not smart enough to solve world hunger, societal prejudices, cultural clashes, war, the energy crisis, global warming, diseases, cancer, [higher and higher pitch.] [low and slow] But if I can enable geniuses that do solve these problems, then I will have lived a satisfied life.


---

## conclusion
[20 seconds]

To make this dream a reality, we need motivated, talented developers who get things done.

What do you look for in an internship? A talented team? Experience? Learning? Money? Food? Events? Make friends? Have fun? Challenging technical problems? Impact?

Comrade Zoidberg says, why not Khan Academy?

Thank you Khan Academy for an awesome internship, and I hope you, dear viewer, may have that experience too.


## one more thing
[20 seconds]

Oh wait a minute, there is one more thing. The newest member of our team is a flying shark! It actually swims through the air! Come and see for yourself; the shark is not a lie.

To make up for my non-existent drawing and oratory abilities, I highly recommend watching Sal Khan's TED talk or Vi Hart's videos on mathematical doodling.

__vi hart stuff, TED logo__

