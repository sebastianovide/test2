(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, _) {
    $rootScope._ = _;
    $log.debug('runBlock end');
  }

})();
