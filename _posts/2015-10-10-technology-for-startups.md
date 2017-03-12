---
categories: architecture
---
# the best stack

When customers ask me what stack should they use for their startup, my answer is always a variation of "it depends".  

Asking what is the best stack is like asking what is the best operating system, the best IDE (why do you need more than “vi” would say somebody), the best mobile phone, the best language, or the best breakfast. Ok, the last is a bad example as the answer is obviously "sandwich of Halloumi, brown bread, eggs and tomatoes with coffee milk and honey", but in the the case of a tech Startup the answer is a little bit more complicated.  

I've seen decent web apps built by skillful Perl developers (I'm talking about 2015!), complex desktop applications built with Visual COBOL (yes, it still exists) and even beautiful web dashboards built with R. Some of the most successful companies started using languages that at some point (by some people) were considered not good for big complex applications such as Ruby on Rails and PHP! I think that in choosing technologies and tools there is a lot of philosophy involved and two very competent experts could give you two completely different answers to exactly the same question.  

For that reason, when choosing the stack, it is crucially important to know who is going to build it, maintain it and eventually expand it.

# example

For confidentiality reasons, I’m describing a hypothetical scenario but still based on a real case. The point is to illustrate a use case of some technologies and the reasoning behind choosing them.  

Let’s assume a small and very young open minded to new technologies team. One CEO, one CTO and a couple of superheroes developers. The plan, following lean principles, is to have a live product in less than three months time to then validate it and eventually adapt. The initial number of users is around few hundreds, to very quickly expand to few thousands over the next few months. At peak usage there should be around 10 users acceding the system at the same time. Of course it must work on web browsers and on mobile devices.

## Frontend: SPA based on angular

The team is too small to create native applications for each device and also a web app. It would be to expensive. And the truth is that android + iOs dev skills are not in the team. So the answer is to create a responsive single page application based on HTML5 and some good JS framework. In this case our philosophical preference is AngularJS. The learning curve is very flat; it decouples views from logic very nicely which allows the team to get help from UI guys that don’t know JS. Not having UI savvies in the team, Bootstrap can save you. It is very easy to create nice responsive apps with just simple HTML tags plus few CSS classes. Furthermore, the code results very neat and simple to read. As you must guess, instead of starting the project from scratch, I always use some kind of skeleton. In this case I’ve used the same one used for this web site: it is a [Yeoman generator for AngularJS with GulpJS](https://github.com/Swiip/generator-gulp-angular)

## Backend: serverless

In the first prototype, it won’t be doing much back end work apart of storing information and the usual things such as managing user’s authentication and authorization, sending emails, and some <u>small</u> data processing.  
Perfect conditions for using some server as a service and forget about managing machines, fail over, redundancies, scaling etc.  
[**Firebase**](https://www.firebase.com): it is an extremely simple to use, robust, scalable, secure and _real-time_ NoSql server as a service, owned by Google. As its operate with a freemium model, it is very simple to start a project for free and then pay as you use when you get real users. On top of that, Firebase provides also a hosting service which is perfect for our server less single page application! Deployment consist in just copy static files, using a single command line, on firebase CDN.

## Backend processing: NodeJs on Heroku

Even if most of the functionalities can be easily and safely implemented in our front end, there are still few things that need to be done server side. As Firebase is not providing (yet) some sort of backend processing, the extra bits, such as sending emails, SMS, schedule tasks etc, can be easily implemented using the same language used for the front end: JavaScript.  

It is a matter of few lines of code to create a NodeJs micro service connected to our firebase and deploy it on  [**Heroku**](https://www.heroku.com). In this way we are effectively using firebase as a queue system. Also Heroku has a freemium model, so it is possible to build a free prototype and start paying just when you are ready to go live.

## Architecture overview

![Firebase + nodejs]({{ site.url }}/assets/images/Firebase%20+%20nodeJs.png)

## Flaws

Of course there are flaws. No technology is perfect. It all depends on what is most important for you at this specific time. In our case it was very important to get a business up and running as quickly as possible to secure funding for the next stage. It didn’t matter to much that we could not log all the queries (Firebase could change it at some point in the future) or that firebase didn’t verify users emails while registered. At this point of the business are all nice things to have, but it was much more important to have a full working application live and ready to demo to investors.

# Best technology: ours of course!

There are plenty of options in the IT jungle and choosing the right ones could be challenging. Using the right technologies in the wrong hands is worst that using the wrong technologies on the right hands. So I prefer to keep the technology decision to the actual team influencing its decision based on my own personal experience (aka preferences) always keeping in mind that artists create nicer things when they choose their own tools and keeping in mind that at some point the creation will belong to some other artists.
