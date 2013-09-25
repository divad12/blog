---
layout: post
title: Announcing Numbers API
---

tl;dr: Check out [Numbers API](http://numbersapi.com) for interesting facts about numbers.

Back when I was [interning at Khan Academy a few months ago](/2011/11/02/how-khan-academy-is-using-machine-learning-to-assess-student-mastery.html), my intro project was to create a dashboard for exercise statistics. Among the [variety of graphs and widgets](https://khan-academy.geckoboard.com/dashboard/9820993B8EEAB10E) was one that reported a factoid about the number of shipped exercises, such as "We now have more exercises than the number of years Harriet the Galápagos tortoise lived (1830–2006)."

People seemed fascinated by their tidbits of random trivia. Sal Khan even suggested hosting a web service for these facts at numbers.khanacademy.org, but nothing came of that. That is, until now.

My friend [Mack](http://mduan.com) and I were deciding on a side project to distract our minds from Bode plots and Jacobians (if only Sal had some videos on Control Theory...), and narrowed down a [crapload of ideas](/2012/01/05/my-experiment-in-daily-idea-generation.html) to just one. The winner was an API for interesting number facts, based on the criteria of being novel, completable in a few weekends, and interesting to us.

After a few weekends of on-and-off work, including a demo at our class's [student-organized hackathon](http://sehackday.com/), we're finally launching [numbersapi.com](http://numbersapi.com)!

We built Numbers API with Node and Express for the back-end and Sass + Compass to make CSS bearable. We designed the landing page and the web service together, and then Mack put together the first iteration of the landing page while I set up the server and wrote the API + docs. We then sort of swapped roles, and I had the chance to prettify the landing page to my tastes. I also yet again self-plagiarized from my work at Khan Academy and did 20% of the work required to convert the rolling numbers counter into a jQuery plugin (the other 80% is more testing, performance tuning, code clean-up, and greater extensibility).

Mack, on the other hand, started hunting for content. I believe he used LXML to scrape Wikipedia and a Python natural-language processing toolkit to process sentences into a consistent grammatical form. This form was specifically chosen to be flexible enough to be used in a sentence like "42 is **&lt;fact string&gt;**." as well as "We now have more exercises than **&lt;fact string&gt;**." (I leave the exact form as an exercise to the reader.) This turned out to be non-trivial for _trivia_ facts, and we even resorted to manually combing for interesting facts on cardinal numbers (which were far _outnumbered_ by numbers used as names and codes) and phrasing them appropriately.

This is just the beginning. Time-permitting, we are also thinking of extracting and paraphrasing interesting facts from the Guinness World Records, almanacs, numbers in nature, statistics, number of works by famous artists, etc.

<!--Here's a charts of API usage statistics:-->
<!--
<div id="time-histograms"> </div>
<script>
    $.get('http://numbersapi.com/type-time-highcharts', function(data) {
        var highchartsData = [];
        $.each(data, function(type, values) {

            highchartsData.push({
                name: type,
                data: values
            });
        });  // TODO use map
        new Highcharts.Chart({
            chart: {
                renderTo: 'time-histograms',
                type: 'spline',
                height: 400
            },
            credits: { enabled: false },
            title: { text: 'API usage over time' },
            series: highchartsData,
            yAxis: {
                title: { text: 'Requests' },
            },
            xAxis: {
                type: 'datetime'
            }
        });
    });
</script>
<noscript>
    Please enable JavaScript to see charts.
</noscript>
-->

Have fun, and we can't wait to know how you'll be using these number facts! We ask only that you be gentle to our server.

[Numbers API](http://numbersapi.com)

