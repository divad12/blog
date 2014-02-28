---
layout: post
title: Open-Sourcing UW Flow
---

We're really excited to be open-sourcing [uwflow.com](https://uwflow.com) — a project that three friends and I have been working on for the past year and a half.

Here's some highlights:

- Flow lets University of Waterloo students plan courses with friends.
- Some numbers:
  - Last month, we served 40K pageviews to 9K unique visitors.
  - Last year, users made 480K searches.
  - In total, users have contributed 47K ratings and reviews.
- Who made this:
  - Development: [Mack][], [Sandy][], [Jamie][], and some guy
  - Marketing: [Terrance][] and [Shubham][] (Sept. 2012 - April 2013)
- We're open-sourcing with the permissive MIT license because we want anyone to be able to fork and host this for their school.
- Check out [the code on GitHub](https://github.com/UWFlow/rmc), and come talk to us in [our public chat room](https://www.hipchat.com/gAUVWHvA3)!

Read on for how we started and why we're open-sourcing.

## How we started

Two years ago, I met up with two friends to hack on a side project with these goals:

- Launch fast and iterate
- Make something useful
- Be startup viable

The idea was to also use this as our engineering capstone project &#91;1\], as well as potentially be a business that we could continue after we graduate. We could get course credit for doing a startup while still in school!

Over the next few months, we came up with about 300 ideas. But, nothing stuck. Nothing met all our criteria _and_ that we'd be dying to work on everyday for the next two years.

Four months later, we finally agreed on something. We all hated planning courses — choosing the classes and professors that would make up your next term's timetable. Taken from Sandy's standard pitch:

> It's like doing taxes. Each time, it's inevitable, and each time, it's a pain. Right now, students use the undergraduate calendar to look through thousands of courses before even knowing what's out there. And that doesn't even include opinions from people who had taken those courses before. For that, we rely on friends and word of mouth. But that’s both incomplete and inconvenient.

So we thought, it'd be awfully useful to have a website where we could see what our friends are planning to take, what they've taken, and what they thought about those courses. Unfortunately, nothing like that that existed (or was widely used) at Waterloo to our knowledge.

Perfect. We'll build it.

## Development

We started coding in September 2012. Much of the work was done in the first two months. In an effort to launch early, we made sacrifices:

- Skipped class
- [Stayed up all night](https://github.com/UWFlow/rmc/graphs/punch-card)
- Aggressively cut features
- Used up all of our assignment grace days

Of these, I regret the all-nighters. They helped with hitting deadlines (such as course enrollment periods), but were harmful to our health, happiness, and long-term productivity.

Our tech stack and codebase came to be heavily influenced by where we had interned -- in particular, Khan Academy and ContextLogic. We borrowed practices, technologies, tools, and coding styles. We owe Flow to those internship experiences.

We were fortunate to have some awesome people join us. Two students in the Accounting faculty whom we met at the VeloCity residence, Terrance and Shubham, volunteered to help us out with growth and marketing. Two months after we started coding, our classmate and good friend Jamie asked to join us to form our engineering capstone project team. &#91;2]

## Launch

We first launched after two weeks of coding. It was an embarrasing MVP to just our Software Engineering class of 80 students. A few weeks after that, we launched to the 1500-strong Accounting faculty, and then a few weeks later, to the entire campus.

To get the word out, we tried all sorts of things:

- Told all of our friends
- Posted on [Reddit](http://www.reddit.com/r/uwaterloo/comments/12csk0), Facebook, blogs, and forums
- Emailed residence dons and professors
- Walked up to students and told them
- Facebook ads (Sandy had credits as a former intern)
- Posters

The most effective channel was social media -- Facebook and Reddit. Posters and other physical media were among the least effective -- we saw no discernible impact the week we had posters like this all over campus:

<div style="text-align: center;">
  <img src="/images/flow-poster.jpg" alt="Flow poster" width="300"/>
</div>

The first few months after launch were a really exciting time. We had 450 sign-ups the first day, and got lots of [positive feedback](http://www.reddit.com/r/uwaterloo/comments/12csk0) and [ideas for features](https://uwflow.uservoice.com/forums/179420-general/filters/top). We ran a focus group, and one keen user typed up all of this of her own initiative:

<div style="text-align: center;">
  <img src="/images/flow-focus-group-feedback.jpg" width="300" alt="Flow focus group feedback" />
</div>

(Today, a year after, most of these are still TODOs. Yep, we're lazy bums.)

To seed our ratings and reviews, we scraped sources including official, publicly-released course critiques. We then hosted a "beer and review night" at the VeloCity residence, where we gave out beer in exchange for ratings and reviews.

We also ran a raffle contest, giving out a Nexus 7 and other goodies. This effectively doubled our ratings and reviews. If you're a Flow user, that's why you (still) get those mysterious points for reviewing courses.

We've found that our biggest traffic gains came from announcing new, useful features, such as our [launch of class sections info](http://www.reddit.com/r/uwaterloo/comments/1qe1xl).

## Business?

Though we had some good traction, Flow didn't really work out as a monetizable business. We interviewed at YCombinator, but didn't get further. &#91;3\]

We realized we weren't enamoured with selling to universities -- we wanted to build things our users would love. We didn't want Flow to turn into mandate-ridden enterprise bloatware that would alert you every 20 minutes to ask if you don't want to be logged out. Or sell that in Powerpoint presentations to "decision makers" who wouldn't be the end-users.

We thought about possibly serving the expanding online courses market, but our core userbase was college students on campus. We did not have the heart to pivot and abandon them.

Neither did the idea of squeezing money from students greatly appeal to us -- whether that's through ads (that we never even look at ourselves), or through textbooks (that we haven't bought since being clueless first-years).

We did, however, all agree on one thing. We wanted Flow to continue to be used and maintained long after we graduate, whether as a sustainable business or some other means.

We then realized that we much preferred to see Flow sustained as a community-supported, open-sourced project, than to submit to the whims of the highest bidder.

## Open-source

So, that's why we're open-sourcing. Explicitly, the reasons are:

- We'll (hopefully) be graduating in two months.
- We hope Flow continues to help students long after we graduate.
- We want to see Flow continue as a student-driven project for students.
- We have lots of features and improvements we wanted to make, but didn't get the time. For example, analyzing prerequisites, recommending courses, building a conflict-free timetable, and auditing degree requirements.
- We've always wanted to bring Flow to other universities (and others have asked us), but our hands were full with just Waterloo. Now others can do that for us. :)

So over the past few days and months, we've prepared the codebase to be open-sourced:

- Wrote developer docs.
- Ensured tests were in good order.
- Wrote a style guide and set up a linter.
- Tested setup on fresh installs of Mac and Linux (Ubuntu 12).
- Picked the permissive MIT license so you can fork, modify, and host this for your school.

**Want to contribute?** Check out the [code on GitHub](https://github.com/UWFlow/rmc).

**Not sure where to start?** Perhaps you can tackle [one of these issues](https://github.com/UWFlow/rmc/issues).

**Have questions or just want to talk?** Come hang out with us in [our public chat room](https://www.hipchat.com/gAUVWHvA3).

**Want to fork Flow to be a white-labelled platform for your school?** Awesome -- go for it. Just be wary that the data scrapers are tied to [Waterloo's APIs](https://github.com/uwaterloo/opendata).


## What's next?

We'll still be the primary maintainers of Flow for a while, but we're looking for maintainers who are interested in taking over the project after we graduate.

Oh, and a few things coming up soon:

- Email logins! We're thinking of you, non-Facebook friends.
- We'll be boothing at the [SE Capstone Symposium](https://uwaterloo.ca/engineering/events/software-engineerings-capstone-design-symposium) on March 21 in DC. Drop by and say hi!
- Secret surprise.

Thanks to everyone who gave us a shot. Thank you for rating courses, writing reviews, making searches, sharing schedules, giving us feedback, or just reading this far.


<hr class="article-divider">

## Footnotes

&#91;1\] Also known as the Fourth Year Design Project, this is a 3-course sequence where Software Engineering students at Waterloo work on a single project in teams of 3-4 over the span of 20 months. Instead of a purely educational school project, we thought of this as the perfect opportunity to do a startup while we were still in school (and get course time and credit at the same time).

&#91;2\] Although Jamie is one of the most competent programmers I've worked with, and we've pair-programmed in ACM contest practices, we just _had_ to ask him Fizz Buzz anyway. You know. Just in case. We also asked him his favourite interview question ever: "What's your greatest weakness?" If you ever interview him, make sure to ask him questions like that.

&#91;3\] Here's the email Harj sent us:
> I'm sorry to say we decided not to fund you guys. It was a tough decision because we enjoyed meeting you and it's clear you're good programmers.  Our concern is that while you've build good software, we couldn't see how you'll be able to acquire enough users to grow this into the kind of large, independent company that investors are hoping to fund.  We think it would be best if you finished college and in the meantime worked on projects because they were interesting rather than trying to come up with a startup idea right now. That approach actually often leads to better startup ideas anyway and we'd encourage you to reapply again in the future, we'd be happy to hear from you.

 We agree with pretty much all points.

 [Mack]: https://github.com/mduan
 [Sandy]: https://github.com/jswu
 [Jamie]: http://jamie-wong.com
 [Justin]: http://j-li.net/
 [Kartik]: http://kartikt.com/
 [Terrance]: https://twitter.com/TerranceKwok
 [Shubham]: https://twitter.com/Shubham
