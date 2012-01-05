---
layout: post
title: My Experiment in Daily Idea Generation
cssPaths: ["/css/ideas-list.css"]
---

I've always had the fear that, should I ever want to do a startup after I graduate (and enter the real world), I wouldn't have an idea that I wanted to passionately pursue. So, for about a year or so, I've been passively maintaining a list of any idea I get, recording in a Google Doc anytime something interesting pops into my head. With about 40 items on that list, there wasn't anything that hadn't been done that I thought was particularly compelling. Then, one day, a meta-idea popped into my head: what if I spent 10 minutes every morning _actively_ generating ideas, writing down any thought I get in a stream-of-consciousness, unfiltered fashion? I could just cut back my morning Reddit + Hacker News + RSS reading.

Would there be anything interesting? How many would I get? Would the volume trickle off after a few days? Would it increase the rate of passive ideas that pop into my head? Would it nurture my creativity and engender greater right-brain activity (whatever that means)? I was curious.

So, I started this experiment hoping to do it every day for about a month. I didn't care how crappy the ideas were, as I kept in mind:

1. I'm more interested in the results of this experiment than for anything worthwhile to come as a bonus side-effect.
2. I don't care what anybody thinks. I did not need to show this to anybody.
3. Have fun. If not, then I'm doing it wrong.

By the end, I accumulated a total of 286 ideas over 29 days:

## All ideas

This is the raw list of my stream-of-consciousness writing, with some points edited to be clearer.

<p>
    <div id="all-ideas">
        {% capture all_ideas %}{% include ideas-experiment.md %}{% endcapture %}
        {{ all_ideas | markdownify }}
    </div>
</p>

<script>
$.getScript('/js/jquery.foldlist.js', function() {
    $('#all-ideas').foldList();
});
</script>

Frequently-occurring words:

<a href="/images/idea-tag-cloud3.png">
    <img src="/images/idea-tag-cloud3.png" width="900" alt="Ideas Frequent Words Cloud">
</a>

## My favourites

I picked some items that particularly interest me, whether it's because I would find it fun to work on or wish it existed:

- **Challenge Accepted**: users pay to see stunts / dares (eg. eat X chili peppers, hop on one foot while X and Y for Z distance). Acceptors upload video proof which is judged by community or moderators. Money refunded if no acceptors.
- **Productivity**: Did I work today? Report computer usage: # of lines of code written, # of commits, what sites visited, what apps used, email usage, Reddit, terminal, chat, gaming, etc. Generate report and graphs of all this, compare with previous days. Set quotas; will warn and eventually block usage of time-wasters. Enter your commit message _before_ coding -- automatically sets this as your status message for teammates to see.
- **Karma**: Aggregate all of it! GitHub, StackOverflow, Reddit, Hacker News, Twitter followers, Facebook likes, etc. Stats for total followers, following, graphs, etc. Add another layer of game mechanics, interesting achievements, and badges! Follow your friends and beat them! Leaderboards.
- What are **similar people doing**, reading, or working on? Eg. What do HN readers, standing-desk users, Cubans, GEB readers, rock climbers, terminally-ill, etc. like to do? What are their age groups, ethnicities, hobbies, other characteristics? (eg. Reads Reddit? Have a blog? Contributing to StackOverflow? Doing a startup? Working at tech company? Have read book X? Age histogram? Played piano?) You fill out detailed profile and answer questions. Recommends what you could do. Recursively see what people doing each recommended item like to do. Find similar people near me or friends going to same events, and suggest / facilitate going together.
- Problem: I **need help finishing** what I started
- For beginning **designers**:
  - I really wish there existed some platform where I could upload a screenshot (or other media: video, text, etc.) of a design I was working on, and just have people suggest ideas to make it look better or annotate and nitpick whitespace, colouring, fonts, etc. I would definitely enjoy critiquing others and may even pay to use it to get high quality feedback, or be hooked in with StackOverflow-like game mechanics.
  - Votes: TopCoder for designers, or upload two images and people will select which they prefer
- **Programming Wiki**: There really needs to be more consistent, higher-quality, and collaboratively-edited documentation for every language. Should not only document definitions, but also provide:
  - a variety of good examples (hosted on GitHub/gists?)
  - usage advice
  - links to other references
  - links to relevant StackOverflow questions
  - the idiomatic/conventional way of doing something
  - recipes for common tasks (such as file I/O)
  - common beginner mistakes with upvotes (eg. Python’s default args evalled once; JS closure-in-for-loop gotcha)

  Also in need is a consistent and high-quality set of tutorials for CS students to prepare them for industry and teach things that might not be taught in school: introduce Linux; Vim; Git and GitHub; JS; Firebug or Chrome dev tools; Python or Ruby; C or C++; a functional language; Makefile and a shell; unit testing; Apache or Nginx; DNS; setting up a server; a web framework; where / how to ask for help; how to debug; blogging and communicating; resume + interviewing; etc.
- On any given term, half of all Waterloo co-op students are working while half are studying on campus. With over 100 per term working in California, we need a **bike sharing program for Silicon Valley interns**!
- **Conversation**: Suggest topics from what you have talked about previously, your interests, news. Mobile app to find similarities between two users and suggests topics based on those, or find people near you that you maybe interested in talking to.
- Malware / **virus to force-upgrade IE users** or install Chrome frame (I won't be doing this but I hope somebody will :)
- **Pro-tips** mobile app: eg. "Avoid that side trail", find interesting stories near you, number of deaths near you, closest death near you. Around your neighbourhood / city: Where to eat, best place for haircut, where to get X, where Y hangs out, etc.
- **Mobile app for** ml-class or ai-class or other **Stanford online courses**
- Remote-activated **middle finger lights** on side or back of car: Would be fun to make and serve a noble purpose -- that of expressing my thorough indignation at the offending party regardless of time of day -- but alas, I don't have a car and can't drive.
- **Watch TV shows together over internet** with live chat, polls, predictions, etc.
- Collaborative **brainstorming**: Real-time with upvotes, game mechanics, and karma. Optionally, will show images and word associations to inspire you.
- **Git rebase GUI**: drag-and-drop where to move branch; visually select a range of commits to squash into one commit
- **Study aids**: collaboratively-created formula sheets. Allow forking, customizing notation, upvotes, customizations for classes. Cheat-sheet creator for a class. User-contributed mnemonics ("Every Good Boy Deserves Fudge") for every subject (eg. anatomy) and every formula.
- **Word this sentence** in a certain style: eg. Victorian England, gangsta, Southern, lawyerese. How would they say it? User-contributed + game mechanics + upvotes. Would be fun to train a machine learning algorithm (similar to training translation software).
- **Work bartering**: I’ll program something in exchange for you designing or drawing something. More efficient allocation of resources
- **Decision-making** platform: Eg. I'm looking to get a VPS but I'm completely new to this. I'll explain my scenario, criteria, and budget, and users will comment, suggest and vote on alternatives. May also feature collaboratively-edited pros and cons, gather common scenarios, and StackOverflow-like game mechanics.
- Go **eat lunch with somebody close by** (for those who don’t want to eat alone)
- **Discussion aggregator**: Blog posts that have hit Hacker News or Reddit are commonly edited with a link to those comments. Why not pull in comments from those and other sources, and display them, separated by source, under the post? Could possibly also be a browser extension.
- **Vim show-off**: plugin to save and see time-lapse of how code/article was created. Show all insertions / deletions and commands used.
- **Restaurants**: My friends and I always have difficulty deciding where to eat. I want a daily recommendation that favours places I haven't visited yet and eventually learns my taste from my ratings. Also, sometimes I just want to find where to get the best pineapple fried rice, and I don't care which restaurant as long as they have delicious pineapple fried rice. Let me review, rate, and query by menu items.


## Noteworthy experiment observations

- It seemed to me that I had more thoughts -- thus likely more ideas -- after waking up to a good night's sleep.
- The inspiration for many ideas came from recent happenings. Many times my thought process would start with recounting recent events and thinking if there were any associated problems.
- The previous point suggests that it may make more sense to actually record _problems_ instead of or in addition to ideas -- I've been taught that there are many different ways of solving a problem, but focusing on a possible solution too early may blind one from other solutions.
- One cool thing was that the rate of passive ideas definitely increased. After a few weeks, I noticed that ideas would just pop into my head during my daily 40-minute bike rides to and from my internship -- I was _not_ actively generating ideas, but they would come while I was relaxed and having other thoughts. I estimate that, on average, 1-2 ideas per day came in this manner.

## Now it's your turn

I'm not claiming any of these rambling thoughts as my IP or something silly; I wrote most of these because I truly wish they existed so that I could use them, or because I would derive enjoyment from building it. Further, I'm sure many of these have already been attempted or exist (which, of course, does not preclude another competitor).

This technique of daily morning brainstorming can be applied to almost anything that would benefit from a list, and not just startup/project ideas. Here's some ideas:
- research topics
- design / UI ideas
- product ideas
- blog topics
- things to do
- conversation topics with friends
- gift ideas
- self improvements
- from a recent HN post: [things to learn](http://swanson.github.com/blog/2011/12/04/whats-on-your-learning-list.html)
- this list itself: what to apply this technique to (then generate each of those lists!)

If you're reading this blog post and others on a daily basis, then you have time to do this. Although I did this in the morning and found that a good time, you don't have to; my friend Mack tried this when he was showering, biking, or bored and came up with a respectable list after a week. Do it during any dead time, such as in transportation, and use the [method of loci](http://en.wikipedia.org/wiki/Method_of_loci) to hold on to those thoughts for recording later. I'm sure you can come up with better ideas that are more relevant to your life.

The golden rule is to not filter yourself: switch off your analytic faculties and let your thoughts flow unhindered. It's amazing what your brain will conjure if you just let it loose with unrestrained thoughts. The platinum rule is to make something of your giant list; without action, all the ideas in the world are for nought.

Give it a try. Pretty soon, you may find yourself with an endless torrent of project ideas to occupy all your free time.
