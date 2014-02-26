---
layout: post
title: Start with Mockups
---

My friends and I are working on a side project &mdash; [a course planning website for our university](http://uwflow.com). We decide to add a new feature that involves some UI work. My friend goes off to hack on it. 300 lines of code later, he's done part of the UI and shows it to us. Here's what it looks like:

<img src="/images/mockups/flow-select-course-2.png" alt="UW Flow manually select course prototype" width="680"/>

It lets you add a course (done) for a specific term (not yet done).

We discuss this for a few minutes, and realize that the extra information in the dropdown isn't necessary in this context. At this point, the user has a course in mind and just needs to find it, so all that's needed is the course code and name. Something like this (with [Select2](http://ivaynberg.github.io/select2/)):

<img src="/images/mockups/flow-select-course-4.png" alt="UW Flow manually select course prototype 2: small version" width="680"/>

Being smaller, we can place this dropdown next to term headings &mdash; we get the "for a specific term" part for free without designing more UI.

So, we agreed to scrap the first prototype and redo most of the UI. We were regretful of the throwaway code, but it was better than writing more throwaway code.

How could we have averted this?

## Start with Mockups

We didn't need 300 lines of code to figure that out. With a rough 5-minute sketch, we could engage in the same level of discussion.

As a programmer, I've found it incredibly helpful &mdash; before coding any piece of UI &mdash; to first draw a mockup. Just like a lean startup, the goal is to get feedback, fail fast, and iterate quickly. Experiment with multiple ideas before settling on one.

This has been a lesson we've learned during my internships at [Sift Science](https://siftscience.com) as well &mdash; particularly since our [awesome designer](http://tonyhschu.ca/) just joined in August. So, we now operate with this rule:

> For any major additions to the UI, please always draw some quick mockups on paper first. And by draw, I mean scrawl, scratch, barf graphite onto paper, whatever you want. This is not art. You will not be judged on how pretty it looks &mdash; I promise you. Mockups are purely meant to define interaction and layout &mdash; not visual styling/design.
>
> The purpose of a mockup is to be able to very quickly iterate on UI concepts, before it gets much more difficult to change once committed to code. It's also much easier for someone to give you feedback for big changes on a 5-minute mockup than on beautiful shiny working code and UI.
>
> Another advantage of starting with low-fidelity mockups is that it focuses time and attention on trying different layouts and interactions, instead of refining one and being stuck at a local maximum.
>
> A pencil-and-paper mockup also makes it easy to communicate to other team members what it is that you're building, concretely (heh).

Finally, just to emphasize that a mockup is a communication and ideation tool &mdash; not the end result &mdash; here are some of my brilliant masterpieces that you can _mock_ at:

<!--If you can't mock it, it's not a mock-up!-->

<!--TODO: read tai-jin's hipchat-->

<!-- TODO: uwflow examples -->

<img src="/images/mockups/vim-awesome-1.jpg" alt="Unreleased side project: 7 concepts for a tagging widget" width="680"/>
Seven concepts of a tagging widget for an unreleased side project. We ended up going with #4. On other mockups where I heavily relied on hover states, my friend gave good reasons to avoid them and suggested alternatives (while still showing relevant info without clutter).

<!--- Here, this mock-up and subsequent discussion with a friend to focus on less on-hover elements...-->

Here's a series of three mockups depicting the UX to get human training data to improve a customer's [machine learning model](https://siftscience.com/how-it-works) for Sift Science.

<img src="/images/mockups/sift-survey-2.jpg" alt="" width="680"/>

Notice the misbehaving, _untrained_ puppy in the upper-right.

<img src="/images/mockups/sift-survey-1.jpg" alt="" width="680"/>

(The "share on Facebook and Twitter" button is a joke.)

<img src="/images/mockups/sift-survey-3.jpg" alt="" width="680"/>

The puppy has been trained into a fraud-fighting dog!

I hope that shows you can be devoid of artistic skills and still draw mockups.
