/* global _ */

(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .filter('list', listFilter);

  /** @ngInject */
  function listFilter() {
    return function(input, separator_) {
      var separator = separator_ || ", ";

      return _.reduce(input, function(rtn, el) {
        if (rtn !== "") {
          rtn += separator;
        }
        rtn += el;

        return rtn;
      }, "");
    };
  }
})();
