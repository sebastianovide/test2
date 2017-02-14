(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .config(config);

  /** @ngInject */
  function config($locationProvider, $logProvider, localStorageServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    localStorageServiceProvider.setStorageCookie(0, '/');
    $locationProvider.hashPrefix('!');
  }

})();
