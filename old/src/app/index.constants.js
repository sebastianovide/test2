/* global moment:false, window */
(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .constant('_', window._)
    .constant('moment', moment);

})();
