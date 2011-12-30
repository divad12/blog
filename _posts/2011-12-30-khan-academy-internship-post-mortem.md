---
layout: post
title: On my Internship at Khan Academy
---

---

# proficiency model intro
1.5 minutes

Once upon a time on the internet, there was rage. Sir Rage was learning geometry on Khan Academy -- and was on his tenth problem, correctly answering the previous 9 -- when he forgot to multiply pi by 2 and got it wrong. Now, to be considered proficient and move on, one had to get a streak of 10 right answers in a row. Having now to restart from the very beginning, with all his prior progress erased, brought his rage to a boil. F7U12, he hissed.

There were other problems, and an analysis performed by comrade Jace, a full-time volunteer, revealed that those students who take 10 problems to get a streak had a much greater chance of answering correctly after a break, over those who took 30 problems to get a streak.

These are but two problems with the streak -- requiring users to do too many problems to attain proficiency -- false negatives -- and wrongly letting through users who may need more practice -- false positives.

Since those dark ages, we've trashed the streak.

Together with comrade Jace, we developed a machine learning algorithm that would take into account different features, including weighted moving averages, current streak (which turned out to be a very weak feature), number of correct answers, number of wrong answers, and percent correct. These inputs are fed into a mathematical function which spits out how likely you are to get next problem correct. If that's above 94%, we say you're proficient. Comrade Jace used the statistical language R to to fit the parameters of this function so it makes accurate predictions.

It turns out that under this model, we can more intelligently allocate your time, letting you do just 5 problems on something you know well while giving you the chance to do more practice where you actually need it.

For two weeks we tested with 10% of users, and found

21% more proficiencies earned,

16% more new exercises attempted,

and a reduction from 16.8 problems done per proficiency to 12.4.

But did we lower the bar for proficiency?

Well, it turns out that for both models average accuracy is around 95% after proficiency. If you take at least two days break, it turns out you're slightly more likely to answer correctly if you're proficient under the new model.

So, does this tale end happily ever after? Not yet. This is just the first step in our journey to improve our assessment accuracy and make our users happier.


---

# Things I did
1.5 min

Here's some other interesting things spawned by my internship at Khan Academy.

To motivate developers, we now have a dashboard showing various statistics about our exercise usage with random trivia facts mixed in.
__pan of Geckoboard dashboard__

Comrade Marcos and I joined forces to confront the dilemma of streak frustration as described earlier. We brainstormed some crazy ideas and finally prototyped a momentum model, where you would gain speed and your progress would increase the more problems correct you did. The wise comrade Desmond had the good judgement that led us to realize that, you know, we didn't even know if this would reduce frustration. We didn't know what this was going to do and how it would affect users and the meaning of proficiency. So we took the prudent first step of just abstracting away the streak and just moving the bar part of the way back on incorrect answers, but keeping the underlying streak model for now. Some discussions with comrade Jace and our vision of a more statistically sound model that fit the data led me to realize that this could be a promising application of machine learning. So, I played around with using Naive Bayes to predict next problem correct. There were some interesting results, and comrade Jace, being much more experienced in these matters, tested and evaluated many other algorithms in R. We ended up using logistic regression to model accuracy and to power proficiencies.

In the process I built a tool to allow us to better understand and evaluate our proficiency models. It plotted pretty graphs and ROC curves, complementing comrade Jace's R magic.
__screenshots of ROC curves and graphs__

Before concluding the proficiency model experiments, we wanted to know if there would be any impact on long-term knowledge retention. So, I hacked together a script to download two weeks' worth of problem logs and analyze them with a map reduce.

I also built a UI to go through review problems, which are proficient exercises that you haven't done in a while. From here we can add game mechanics and an optimal review scheduling algorithm to maximize knowledge retention while minimizing time spent.
__review demo here?__

I also assisted comrade Jace with attempting to increase our hint usage, and beginning with UI changes we managed a 55% overall increase.

However, I really believe that smarter and more prolific interns have accomplished impressive feats, such as building the framework that powers all of our exercises with John Resig. I hope they'll make videos too.


---

# Awesome things about working at KA

[2 min]

But you know what, it's much more interesting to talk about why you should be an intern at Khan Academy than what I did.

## The ship and her crew

Ship. Ship. Ship. Ship. Ship. Ship. Ship. Ship. [low mmmmm-ushroom] Mushroom. [higher] Mushroom. Our culture is shipping: fast iterations and continuous deployment. To see your last hour's work on the live site in 3 minutes, making an impact on millions of users, is an exhilarating, addictive feeling. I had the freedom to do this any time of any day of the week. As long as I got stuff done, how long I worked or when I came in was immaterial.

The crew has been very supportive and helpful. For example, Google App Engine had no A/B split-testing framework, so comrade Bengineer Kamens built one in a weekend and open-sourced it on GitHub. It has led to all those juicy statistics I've been telling you and is a joy to use. We actively code review every non-trivial commit in an effort to maintain a clean, readable, and consistent code base. I've learned a lot from this team, including machine learning, UI design, good coding practices, blog post writing, and -- of course -- all the languages and technologies we use. Also, John Resig is famous.

As an intern, you're going to be given massive amounts of autonomy, and with that, massive amounts of responsibility. We've all made inch-by-inch improvements anywhere on the site because we saw a need and just did it. You're an integral part of the core team of a non-profit startup -- make decisions, flesh out projects, shape the company, and directly affect the future of Khan Academy. You're not just responsible for awesome code. You're not just responsible for awesome features. What we want to accomplish by doing this is to help our users learn and ultimately make the world a better place.
__writing john cormack's piece of brilliant code?__


## Perks

It's a lot of responsibility, but we have fun doing it. We're just a few blocks away from Laser Tag. Every Wednesday, we have intense board game nights. Being in downtown Mountain View, we're surrounded by a mountain of food and are close to Silicon Valley meet-ups. We pay very well for interns, competitive with large companies such as Facebook.  We have weekly picnics with Sal Khan and the entire team, and you may get to have 1-on-1 walks with Sal to discuss mathematics, your views on education, ask him questions, anything.

Another cool thing is that we're completely open-sourced on GitHub and Kiln and encourage transparency. So, you can build up a portfolio of cool code and projects to show your mom. I got to write a blog post as part of my job, and it hitched a free ride on the Khan Academy karma train. I've received many useful and insightful comments; among which is an algorithm we're planning to use for optimal review scheduling.

We also get to visit nearby schools who have adopted Khan Academy, and it feels great to see a change you made directly benefiting users.


## Impact

Users. As a non-profit organization, that is and always will be our number one priority. Not shareholders, not search engines, not profits, and certainly not TechCrunch. We have over 100 million video views and close to 2 million problems done per day.

We face some of the hardest challenges. Is the traditional model of education broken?

Well, why must I learn at the same rate as those my age, when I'm still struggling with basic algebra, or if I'm a second grader about to conquer calculus on Khan Academy (true story)?

With all our modern technology, why can't we figure out exactly how to advance each and every student past a particular concept?

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

If we want to make this dream a reality, we need the help of motivated, talented developers who get things done. So I ask of you, what do you look for in an internship? Work with talented developers? Experience and learning? Money? Food and events? Make friends and have fun? Challenging technical problems? Impact?

Comrade Zoidberg says, why not Khan Academy?

Thank you Khan Academy for an awesome internship, and I hope you, dear viewer, may have that experience too.


# one more thing
[20 seconds]

Oh wait a minute, there is one more thing. We just got a flying shark that will eat you up if you look at it wrong! It actually swims through the air. The shark is not a lie.

To make up for my non-existent drawing and oratory abilities, I can highly recommend watching Sal Khan's TED Talk or Vi Hart's videos on mathematical doodling.

__vi hart stuff, TED logo__
