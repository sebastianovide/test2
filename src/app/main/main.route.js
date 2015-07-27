(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/articles', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/articles/:id', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  }

})();
