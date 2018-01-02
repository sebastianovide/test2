---
category: tech
tags: architecture
---
# Cloud functions: finally !
Back in a [2015 post]({{ site.baseurl }}{% post_url 2015/2015-10-10-technology-for-startups %}) I've explained one way of complementing Firebase with NodeJs on Heroku when server side code was needed. In the mean time, the world has evolved and so Google Cloud Platform. Last week [Google announced](https://cloudplatform.googleblog.com/2017/03/Google-Cloud-Platform-your-Next-home-in-the-cloud.html) that [Google Cloud Functions](https://cloud.google.com/functions) was just released as public beta: that adds another way of complementing firebase. Now the same architecture proposed in 2015 would look like this:

![Fiebase + nodejs](https://docs.google.com/drawings/d/1qDgFno_wVtwiRLKzjaGMRwKTMOla756Dxe488BdlPhI/pub?w=731&h=450)

# Basic example
I've done a very basic example to see how difficult was to get from 0 to react to firebase events: aligned to other Google products, it takes around 5 minutes to get started. :)

- ```firebase init``` will create a ```functions``` folder
- add your function in ```functions\index.js```. See an example [in this Github repo](https://github.com/sebastianovide/pocs/tree/master/firebase-functions-ping-pong) in ```functions\index.js```
- deploy with ```firebase deploy``` from the folder ```functions```
- celebrate. You can play with it from firebase dashboard. From there you can also see functions logs and usage.

# Flows
- App Engine is in beta
- Cloud Functions are in beta

# More links
- [Google Cloud Functions blog](https://cloudplatform.googleblog.com/2017/03/Google-Cloud-Functions-a-serverless-environment-to-build-and-connect-cloud-services_13.html)
- [Google Cloud Functions](https://cloud.google.com/functions/)
- [Cloud Functions for Firebase](https://firebase.google.com/features/functions/)
- [More examples](https://github.com/firebase/functions-samples)
