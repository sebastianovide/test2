---
permalink: /about/
title:  "About"
layout: single
date:   2017-02-16 00:00:00 +0000
categories: random
script: |
  var quotes = [
    {
      "quote": "Everything should be made as simple as possible, but not simpler",
      "author" : "Albert Einstein"
    },
    {
      "quote": "If you can't explain it to a six year old, you don't understand it yourself",
      "author" : "Albert Einstein"
    },
    {
      "quote": "Simplicity is prerequisite for reliability",
      "author" : "Edsger Dijkstra"
    },
    {
      "quote": "Build-Measure-Learn feedback loop is at the core of the Lean Startup model",
      "author" : "Eric Ries"
    },
    {
      "quote": "As you consider building your own minimum viable product, let this simple rule suffice: remove any feature, process, or effort that does not contribute directly to the learning you seek",
      "author" : "Eric Ries"
    },
    {
      "quote": "Simplicity is the ultimate sophistication",
      "author" : "Leonardo da Vinci"
    },
    {
      "quote": "I'm as proud of many of the things we haven't done as the things we have done. Innovation is saying no to a thousand things",
      "author" : "Steve Jobs"
    },
  ];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];  $("#quote span").html(quote.quote);
  
  $("#quote cite").html(quote.author);
  $("#quote").show();
---
The Lean Seed is maintained by Sebastian Ovide, strong supporter of the lean principles, passionate about startups, agile evangelist, natural born geek.

As lead engineer of the [Geovation hub](https://geovation.uk), Britains's pionering location data hub, I've built a team that supports startups on going live with their MVPs as soon as possible. I am pragmaticaly frugal, which means that I keep things as simple as possible maximasing the real business value delivered with the minimal costs.

At the same time I provide technical advice to early stage startups acting as a partime CTO. I help them to develop the MVP, choose the right technologies and building a great tech team.

<blockquote id="quote" style="display: none;">
  <span></span>
  <cite></cite>
</blockquote>
