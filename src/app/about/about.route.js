(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      });
  }

})();
