/* global _ */
(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($routeParams, $location, ARTICLES, ARTICLES_NOTE, ARTICLES_POC) {
    var vm = this;

    var articleType = $routeParams.articleType;
    var articlesMap = {
      'note': ARTICLES_NOTE,
      'poc' : ARTICLES_POC
    };

    var articles = _.values(articlesMap[articleType]);
    var id = $routeParams.id;
    if (!id) {
      id = _.sample(articles).id;
      $location.path($location.path() + '/' + id);
    }

    vm.article = _.find(articles, {id:id});

    vm.articleType = articleType;
    vm.randomArticle = randomArticle;
    vm.nextArticle = nextArticle;
    vm.previousArticle = previousArticle;

    function randomArticle() {
      var article = _(articles)
        .filter(function(v){
          return (v.id !== id);
        })
        .sample();
      if (!article) {
        return null;
      }

      return '/#' + _.trim($location.path(),'' + id) + article.id;
    }

    function nextArticle() {
      var idx = articles.indexOf(vm.article) + 1;
      if (idx > articles.length-1) {
        return null;
      }

      return  '/#' + _.trim($location.path(),'' + id) + articles[idx].id;
    }

    function previousArticle() {
      var idx = articles.indexOf(vm.article) - 1;
      if (idx < 0) {
        return null;
      }

      return  '/#' + _.trim($location.path(),'' + id) + articles[idx].id;
    }
  }
})();
