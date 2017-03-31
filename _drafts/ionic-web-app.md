---
category: tech
tags: note
---
# Ionic for creating PWA [Progressive Web Apps)
[Ionic](https://ionicframework.com/) is very famous for creating hybrid apps. If you are happy about not using Cordova plugins, you can still use Ionic for creating Web Apps and even [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/).

* Create a new project as explained in [Ionic website](https://ionicframework.com/getting-started/).  
* If you are [building a PWA](http://blog.ionic.io/announcing-pwa-support-in-ionic-2/), edit ```src/index.html``` to enable the service worker.
* done. Seriously, done. To deploy simply build (```npm build --prod```) and deploy the ```www``` folder.

# Using some Cordova plugins
Few Cordova plugins have limited support for the **browser** platform. If for some reason you want to use them:
* add the ```browser``` platform with ```ionic platform add browser --save```
* (optional) save the app state into ```package.json``` with ```ionic state save```
* build with ```ionic build browser --prod```
* deploy ```platforms/browser/www``` (instead of ```www```)

# Other notes
* **No tests**: for some reason the Ionic team give priority to other things and left our the tests. To add them you can follow the [official unittest example](https://github.com/driftyco/ionic-unit-testing-example)
* live reload ```ionic run browser -lcd``` is not working. [Github bug](https://github.com/driftyco/ionic-cli/issues/790). **Workaround**: ```./node_modules/.bin/ionic-app-scripts serve --sourceMap source-map --iscordovaserve --wwwDir platforms/browser/www/ --buildDir platforms/browser/www/build```
