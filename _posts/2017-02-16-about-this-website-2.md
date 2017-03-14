---
category: tech
tags: tools
modified: 2017-03-12
---
# It's time for a change
I've come across with [jekyll](https://jekyllrb.com/) and decided to give it a go. It is a simple tool that creates HTML pages from markdown templates. The process happens automatically every time the site is pushed into Github. So, even if it is possible to run jekyll locally to preview the changes, it is not necessary. To [add a new blog entry](https://jekyllrb.com/docs/posts/), just add a file under the ```_post``` folder, push, and Github will do the rest.
# Installation
Initially I've followed [Github instructions](https://help.github.com/articles/adding-a-jekyll-theme-to-your-github-pages-site/) but I have son realized that the [jekyll themes supported](https://pages.github.com/themes/) where not satisfactory. So I've googled for other themes and found [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) which looks beautiful, has plenty of functionalities and the community seems active. As this theme is not supported by the Github, instead of adding it into an existing jekill site, [just need to copy all its files into the project](https://mmistakes.github.io/minimal-mistakes/docs/installation/).
# Simple workflow
- start reading the [quick start guide ;)](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- run the server with ```bundle exec jekyll serve --draft```. It will listen for changes and compile markdown into HTML.
- make your changes. For example add a post in the ```_post``` or ```_draft``` folder.
- see your changes in [http://localhost:8080](http://localhost:8080).
- ```git add .```
- ```git commit -m "my changes"```
- ```git push```
- done, in few minutes it will be published.
