---
layout: single
title:  "About this website"
date:   2015-07-16 16:24:09 +0000
categories: tools
---
# technology
I could have used a typical wordpress or google blogger to write a blog, but as the porpuse of this site is not to be a simple blog, but also to act as a test bed for some randon experimet, I've preferred to code it from scratch. It has been created from the [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular), a very good Yeoman generator for AngularJS with GulpJS. I've used this generator in different projects as it is a piece of cake to work with.

To kick off a new project, if you don't already have the JS ecosystem simply install it with ```npm install -g yo gulp bower```. Then run

```
npm install -g generator-gulp-angular
yo gulp-angular my-new-owesome-app
```

After that you just run

```
gulp serve
```

and it will start a web server and open a browser on the main page. The browser is synchronized with your project folder, so every time you change a file, it will refresh the page automatically. The pages served are not minimized and therefore easy to debug.
Running

```
gulp
```
will minimize the code which you can deploy wherever you want.

#hosting
It is deployed in [GitHub pages](https://pages.github.com/) as it is free and famouse to be very fast. Instead of pushing the files that I want to publish by hand in a gh-pages branch, I share this code in master and publish it using the gulp plugin [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) which can be installed with

```
npm install --save-dev gulp-gh-pages
```
and adding this code in your gulpfile.js

```
var ghPages = require('gulp-gh-pages');

gulp.task('publish', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
```

it allows me to deploy on GitHub with a simple

```
gulp publish
```

# articles
The articles are simple html templates included in the main page with a ```ng-include```. The file ```articles.constants.js``` contains the list of articles, the templates and some other meta data describing the articles. In a future this file will come from some sort of noSql DB.
