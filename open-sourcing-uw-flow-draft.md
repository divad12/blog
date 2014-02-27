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
  - Development: Mack, Sandy, and I since Sept. 2012; Jamie since Nov. 2012
  - Marketing: Terrance and Shubham (Sept. 2012 - April 2013)
- We're open-sourcing with the permissive MIT license because we want anyone to be able to fork and host this for their school.
- Check out [the code on GitHub](https://github.com/UWFlow/rmc), and come talk to us in [our public chat room](https://www.hipchat.com/gAUVWHvA3)!

Read on for how we started and why we're open-sourcing.

## How we started

Two years ago, I met up with two friends to hack on a side project with these goals:

- Launch fast and iterate
- Make something useful
- Be startup viable

The idea was to also use this as our engineering capstone project &#91;1\], as well as potentially be a business that we could continue after we graduate. We could get course credit for doing a startup while still in school!

Over the next few months, we came up with about 300 ideas. But, nothing stuck. Nothing met all our criteria _and_ we'd be dying to work on everyday for the next two years.

Four months later, we finally agreed on something. We all hated planning courses — choosing the classes and professors that would make up your next term's timetable. Taken from Sandy's standard pitch:

> It's like doing taxes. Each time, it's inevitable, and each time, it's a pain. Right now, students use the undergraduate calendar to look through thousands of courses before even knowing what's out there. And that doesn't even include opinions from people who had taken those courses before. For that, we rely on friends and word of mouth. But that’s both incomplete and inconvenient.

So we thought, it'd be awfully useful to have a website where we could see what our friends are planning to take, what they've taken, and what they thought about those courses. Unfortunately, nothing like that that existed (or was widely used) at Waterloo to our knowledge.

Perfect. We'll build it.

## Development

We started coding in September 2012. The majority of the work was done in the first two months. In an effort to launch early, we made sacrifices:

- Skipped class
- [Stayed up all night](https://github.com/UWFlow/rmc/graphs/punch-card)
- Aggressively cut features
- Used up all of our assignment grace days

Of these, I regret the all-nighters. They helped with hitting deadlines (such as course enrollment periods), but were damaging to our health, happiness, and long-term productivity.

Our tech stack and codebase came to be heavily influenced by where we had interned -- in particular, Khan Academy and ContextLogic. We borrowed practices, technologies, tools, and coding styles. We owe Flow to those internship experiences.

We were fortunate to have some awesome people join us. Two students in the Accounting faculty whom we met at the VeloCity residence, Terrance and Shubham, volunteered to help us out with growth and marketing. Two months after we started coding, our classmate and good friend Jamie ask to join us to form our engineering capstone project team.

## Launch

We first launched after two weeks of development -- an embarrasing MVP to our Software Engineering class of 80 students. A few weeks after that, we launched to the 1500-strong Accounting faculty, and then a few weeks later, to the entire campus.

To get the word out, we tried all sorts of things:

- Told all of our friends
- Posted on [Reddit](http://www.reddit.com/r/uwaterloo/comments/12csk0), Facebook, blogs, forums
- Emailed residence dons and professors
- Walked up to students and told them
- Facebook ads (Sandy had credits as a former intern)
- Posters

The most effective channel was social media -- Facebook and Reddit. Posters and other physical media were among the least effective -- we saw no discernible impact the week we had posters like this all over campus:

<div style="text-align: center;">
  <img src="/images/flow-poster.jpg" alt="Flow poster" width="400"/>
</div>

The first few months after launch were a really exciting time. We had 450 sign-ups the first day, and got lots of [positive feedback](http://www.reddit.com/r/uwaterloo/comments/12csk0) and [ideas for features](https://uwflow.uservoice.com/forums/179420-general/filters/top). We ran a focus group, and one keen user typed up this sheet of feedback (which, even today, are still mostly TODOs):

<div style="text-align: center;">
  <img src="/images/flow-focus-group-feedback.jpg" width="400" alt="Flow focus group feedback" />
</div>



To seed our ratings and reviews, we scraped sources including official, publicly-released course critiques. Terrance hosted a "beer and review night" -- a social event where we gave out beer in exchange for ratings and reviews -- at the VeloCity residence.

We also ran a raffle contest, giving out a Nexus 7 and some other goodies. This effectively doubled our ratings and reviews. If you're a Flow user, that's why you (still) get points for reviewing courses.

- the name... we tried to rebrand, but everyone already knew as as flow
- agree it doens't have to do with planning courses... tidbit about name evoking images for females

## Today

- summary of stats


## Business?

- though we got lots of great traction and usage, didn't work out as a monetizable business
- we weren't interested in selling to universities -- didn't want to do enterprise sales, long sales cycles, bloatware, can't serve users
- were not fans of ads or textbook rentals, especially given that first-year only year bought textbooks
- we thought about expanding to online courses, but our core userbase was students. we already have features built out for waterloo students. we didn't really have the enthusiasm to pivot

- we made it as far as an interview at YC, but got feedback from harjeet:

- thought reasonable and fair
- so, after, decided that we'd rather see this used and maintained long after we graduate, than to try to figure out what bits of money we could extract from this

## Open-source

so, we're open-sourcing. why?

We've always wanted to bring Flow to other universities, but we had enough on our hands with just Waterloo. We don't have time.

- we want to bring Flow to other universites, but don't have time anymore
- lot more exciting as an open-sourced project that could be used by many universities, especially after yale bluebook shutdown?
- lots of students have told us they wish something like this existed at their school

- we have lots of planned features, but no time
- we're graduating soon
- want this to be maintained


- if you'd like to contribute and dunno where to get started, check out some of these issues
- development setup tested on linux and mac

- we chose a permissive license to make it easier for other schools to adopt this platform to their use
- we'd love to see you take this to another university.
- if you like help, talk to us on hipchat
- you are free to take the code and use it for your school
- though, much of the scraping code is tied to Waterloo's services

- thank you for all the feedback
- keep them coming
- has been very fun working on this
- we hope flow continues to be used after we leave



## What next?

- email logins coming soon
- whatever you contribute!

- justin and kartik official maintainers after we graduate

We're also really excited to announce that Justin Li and Kartik Talwar will be the official maintainers after we graduate. Justin has contributed to much open-source and interned at Shopify while still in high school. Kartik is the founder of trysignal and the creator and maintainer of U Waterloo's open data API.

Looking back, we set out
- to build something useful
- launch really early -- well before

done and done. startup viable, yes, but not quite.

What did we learn from this project? A lot. But that's a blog post for another day.


<hr>

## Footnotes

&#91;1\] Also known as the Fourth Year Design Project, this is a 3-course sequence where Software Engineering students at Waterloo work on a single project in teams of 3-4 over the span of 16 months. Instead of a purely educational school project, we thought of this as the perfect opportunity to do a startup while we were still in school, and get course time and credit at the same time.


Jamie is one of the most competent programmers I've worked with, but we just _had_ to ask him Fizz Buzz. You know. Just in case. We also asked him his favourite type of questions, HR questions like "what's your greatest weakenss".

2 regardless, i had to ask him interview questions though i had known jamie for years and he was one of the best programmers i knew, and we pair-programed at ACM, i still had to ask him to implement fizz buzz and ask him his favourite thing, HR questionsl ike "what is your greatest weakness". i then asked him a real-world question: get us to 1 million users in the next 10 mins. he failed that
