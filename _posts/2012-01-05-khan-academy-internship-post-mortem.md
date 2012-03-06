---
layout: post
title: On my Internship at Khan Academy
---

In true Khan Academy fashion I made a video to sum up my internship, at the suggestion of our [lead developer Bengineer Kamens](http://bjk5.com). I was not very good at emulating Sal Khan, so the video just evolved in my own style. As I became more and more sleep-deprived, I became less and less rational, and re-recorded some parts I thought were boring. Consequently, some speech is difficult to make out, so you can just read the transcript below or enable captions.

Anyway, the video is not meant to be taken too seriously; I'm not actually that crazy in real life (but I may be if sleep-deprived :P).

(EDIT: Yes, that is actually my voice, although I've been told it doesn't sound like what I normally sound like in real life at all.)

<object width="680" height="382"><param name="movie" value="http://www.youtube.com/v/fUiHSaoXQOs?version=3&amp;hl=en_US&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/fUiHSaoXQOs?version=3&amp;hl=en_US&amp;rel=0" type="application/x-shockwave-flash" width="680" height="382" allowscriptaccess="always" allowfullscreen="true"></embed></object>

---

Once upon a time on the internet, there was rage. Sir Rage was learning geometry on Khan Academy, when he forgot to multiply pi by 2 and got a problem wrong. (He should have used [tau](http://tauday.com).) Now, to be considered proficient and move on, one had to get 10 right answers in a row. Having now to restart from the very beginning, with his prior streak of 9 completely erased, caused Sir Rage to rage.

This was not the only problem at Khan Academy. Our data showed that those who took 30 problems to get a streak performed much worse after a break than those who got a streak in 10.

Those are two classification errors --- requiring some users to do too many problems, while letting through some users who may need more practice.

<img src="/images/ka-internship/thumbs/streak-problems.jpg" alt="Problems with the streak" width="680"/>

What did we do about this?

Well, we developed a machine learning algorithm that takes into account two weighted moving averages, current streak, number of correct answers, number of wrong answers, and percent correct. These inputs are fed into a function which spits out how likely you are to get the next problem correct. Above 94% and we say you're proficient.

<img src="/images/ka-internship/thumbs/machine-learning.jpg" alt="Machine learning with logistic regression" width="680"/>

Now, we make you do only 5 problems on what you know well, but give you the chance to do more practice where it's actually needed.

For two weeks we tested on 10% of users, and found that the new model had 21% more proficiencies, 16% more exercises attempted, and a reduction from about 17 problems done per proficiency to 12.

<img src="/images/ka-internship/ka-ml-results.png" alt="Screenshot of blog post: results" width="680"/>

But did we lower the bar for proficiency?

Well, it turns out that for both models accuracy is 95% after proficiency. After a break, users proficient under the new model tend to perform slightly better.

So, does this tale end happily ever after? Not yet. This is the first step in our journey to improve assessment accuracy and make users happier.


## Some other things my internship spawned

<p>
<img src="/images/ka-internship/thumbs/things-i-did.jpg" alt="Some highlights of my internship" width="680"/>
</p>

To endlessly fascinate, we now have a [dashboard of exercise usage statistics](https://khan-academy.geckoboard.com/dashboard/9820993B8EEAB10E) mixed in with random trivia!

In our iterative attempts to improve the streak, we started with a constant acceleration, momentum model, but decided to just launch a UI change to abstract away the streak and appear more forgiving. For the model changes, we wanted to use the statistical findings on our data and address the type I and II errors. That seemed like a promising application of machine learning, so I trained a Naive Bayes classifier which yielded interesting results. Comrade Jace then joined forces to produce the logistic regression model that we launched.

In the process I built a tool to allow us to better understand and evaluate different models, with pretty graphs and interactive simulations.

After the first proficiency model launch, we wanted to study long-term impact. So, I hacked together a script to download and analyze problem logs with a map reduce.

I built a UI to go through review problems, which are proficient exercises that you haven't done in a while. From here we can add game mechanics and an optimal scheduling algorithm.

Comrade Jace and I also collaborated to produce a 55% increase in hint usage.

Now, I really hope the other interns make videos of what they did too, such as building the [framework that powers all our exercises](https://github.com/Khan/khan-exercises/) with comrade John.

## Awesome things about working at KA

But you know what, I'd rather talk about why _you_ should intern at Khan Academy, so I'll have go at that.

### The ship and her crew

Ship. Ship. Ship. Ship. Ship. Ship. Ship. Ship. Mushroom. Mushroom.

<img src="/images/ka-internship/thumbs/shipping.jpg" alt="Shipping beats perfection" width="680"/>

Our naval culture is one of fast iterations and continuous deployment. To see your last hour's work on the live site in 3 minutes, impacting millions of users, has literally had me jumping up and down. I could do this any time of any day. As long as I got stuff done, how long I worked or when I came in was immaterial.

<img src="/images/ka-internship/thumbs/laptop.jpg" alt="Deploying on my laptop" width="680"/>

The helpful crew has been helpful. For example, Google App Engine had no A/B testing framework, so [comrade Bengineer Kamens built one](https://github.com/kamens/gae_bingo) in a weekend. We code review all non-trivial commits to maintain a clean and consistent code base. I've learned a lot here, such as ML, UI design, good coding practices, blog post writing, and all the technologies we use. Also, [comrade John Resig](http://en.wikipedia.org/wiki/John_Resig) is famous!

<img src="/images/ka-internship/thumbs/happy-crying.jpg" alt="Happy rage face" width="680"/>

Interns are given massive amounts of autonomy, and with that, responsibility. You're an integral part of the core team of a non-profit startup --- make decisions, flesh out projects, and shape the future of Khan Academy. You're not just responsible for awesome code. You're not just responsible for awesome features. Through doing these things we want to make the world a better place by redefining education.

<img src="/images/ka-internship/thumbs/challenge-accepted.jpg" alt="Challenge accepted" width="680"/>


### Perks

It's a lot of responsibility, but we have fun doing it. We're just a few blocks away from Laser Tag. We have intense board game nights every week. Being in downtown Mountain View, we're surrounded by a mountain of food. We pay very well for interns, competitive with Facebook. We have weekly company picnics, and you may get to have 1-on-1 walks with comrade Sal to discuss mathematics, your views on education, ask him questions, anything.

<img src="/images/ka-internship/thumbs/mountain-of-food.jpg" alt="Mountain of food" width="680"/>

Since we're completely [open](https://github.com/Khan/)-[sourced](https://khanacademy.kilnhg.com/Repo/Website/Group/stable), you can build up a portfolio of cool code and projects to show your mom. I got to write a [blog post](/2011/11/02/how-khan-academy-is-using-machine-learning-to-assess-student-mastery.html) as part of my job, and it hitched a free ride on the Khan Academy karma train. I've received many useful and insightful comments, among which are papers on which we're planning to base our algorithm for optimal review scheduling. (Thanks commenter Johnfranklin1299!)

<img src="/images/ka-internship/thumbs/karma-train.jpg" alt="All aboard the Khan Academy karma train!" width="680"/>

We also get to visit schools that have adopted Khan Academy, and it feels great to see your work directly benefiting users.

<img src="/images/ka-internship/thumbs/school.jpg" alt="School house on a hill" width="680"/>


### Impact

Users, our number one priority. Not shareholders, not search engines, not profits, not TechCrunch. We have over 100 million video views and close to 2 million problems done per day.

In redefining education we face some of the hardest challenges.

<img src="/images/ka-internship/thumbs/technical-challenges.jpg" alt="? P = NP ?" width="680"/>

Why must I learn at the same rate as those my age, when I'm still struggling with basic algebra, or if I'm a second grader about to conquer calculus on Khan Academy (true story)?

Why can't we figure out exactly how to advance each and every student past a particular concept?

Why shouldn't learning be as engaging as World of Warcraft?

Why is learning something kids do, and not a lifelong pursuit in and of itself?

Why should quality education be denied to the underprivileged?

How many other [Srīnivāsa Rāmānujans](http://en.wikipedia.org/wiki/Srinivasa_Ramanujan) are out there, held back by their poverty, just waiting to be discovered?

<img src="/images/ka-internship/thumbs/why.jpg" alt="Why rage face" width="680"/>

I want to teach **ALL** the humans! Teach them **ALL** the things!

<img src="/images/ka-internship/thumbs/teach-all-the-things.jpg" alt="Teach all the things!" width="680"/>

Education is a pillar that underlies our modern quality of life. I'm not a genius. I'm not smart enough to solve world hunger, societal prejudices, cultural clashes, war, the energy crisis, global warming, diseases, cancer. But if I can enable geniuses that do solve these problems, then I will have lived a satisfied life.

<img src="/images/ka-internship/thumbs/ka-hand.jpg" alt="Khan Academy hand logo" width="680"/>


## Conclusion

To make this dream a reality, we need motivated, talented developers who get things done.

What do you look for in an internship? A talented team? Experience? Learning? Money? Food? Events? Make friends? Have fun? Challenging technical problems? Impact?

<img src="/images/ka-internship/thumbs/zoidberg.jpg" alt="Need an internship? Comrade Zoidberg says, why not Khan Academy?" width="680"/>

Thank you Khan Academy for an awesome internship, and I hope you, dear viewer, may [have that experience](http://khanacademy.org/r/jobs) too.


## One more thing

Oh wait a minute, there is one more thing. The newest member of our team is a flying shark! It actually swims through the air! Come and see for yourself; the shark is not a lie.

<img src="/images/ka-internship/thumbs/flying-shark.jpg" alt="Flying shark chasing a bird" width="680"/>

And, to make up for my inability to draw or enunciate, I highly recommend watching [Sal Khan's TED talk](http://khanacademy.org/r/tedtalk) or [Vi Hart's videos on mathematical doodling](http://youtube.com/vihart).

<img src="/images/ka-internship/thumbs/recommendations.jpg" alt="My video recommendations" width="680"/>

---

## Behind the scenes

Here's all my drawings:

<img src="/images/ka-internship/first-batch.jpg" alt="Drawings at the office" width="680"/>

<img src="/images/ka-internship/thumbs/second-batch.jpg" alt="Drawings at home" width="680"/>

Here's my setup at the office, next to the legendary [Vi Hart's desk](http://www.youtube.com/watch?v=e1a6Bxc0OYQ):

<img src="/images/ka-internship/thumbs/office-setup-1.jpg" alt="My video recommendations" width="680"/>

At home getting some more footage with my Android phone:

<img src="/images/ka-internship/thumbs/home-setup-3.jpg" alt="My video recommendations" width="680"/>
