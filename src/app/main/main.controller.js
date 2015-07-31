/* global _ */
(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($routeParams, $location, ARTICLES) {
    var vm = this;

    vm.randomArticle = randomArticle;
    vm.nextArticle = nextArticle;
    vm.previousArticle = previousArticle;
  //  vm.article = _articles.find({id:id}); // Defined below

    /*--*/
    var tags = $routeParams.tags ? $routeParams.tags.split(",") : [];
    var id = $routeParams.id;

    var _articles = _(ARTICLES)
      .filter(function(v) {
        return _(tags).every(function(tag){
          return _(v.tags).contains(tag);
        });
      });
    var articles = _articles.value();

    if (_articles.size()===0) {
      $routeParams.id = id;
      $location.path("/about").replace();
      return;
    }

    if (!id) {
      id = _articles.sample().id;
      $routeParams.id = id;
      $location.path($location.path() + '/' + id).replace();
    }

    vm.article = _articles.find({id:id});

    var queryString = _.trimLeft($location.url(),$location.path());

    function randomArticle() {
      var article = _articles
        .filter(function(v){
          return (v.id !== id);
        })
        .sample();
      if (!article) {
        return null;
      }

      return '/#!' + _.trim($location.path(),'' + id) + article.id + queryString;
    }

    function nextArticle() {
      var idx = articles.indexOf(vm.article) + 1;
      if (idx > articles.length - 1) {
        return null;
      }

      return  '/#!' + _.trim($location.path(),'' + id) + articles[idx].id + queryString;
    }

    function previousArticle() {
      var idx = articles.indexOf(vm.article) - 1;
      if (idx < 0) {
        return null;
      }

      return  '/#!' + _.trim($location.path(),'' + id) + articles[idx].id + queryString;
    }
  }
})();
