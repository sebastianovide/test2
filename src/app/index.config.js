(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .config(config);

  /** @ngInject */
  function config($logProvider, localStorageServiceProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    localStorageServiceProvider.setStorageCookie(0, '/');
  }

})();
