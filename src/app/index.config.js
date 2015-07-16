(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
