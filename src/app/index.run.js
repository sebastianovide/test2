(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
