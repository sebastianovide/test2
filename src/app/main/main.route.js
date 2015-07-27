(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/articles/:articleType', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/articles/:articleType/:id', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  }

})();
