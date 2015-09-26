(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/about'
      });
  }

})();
