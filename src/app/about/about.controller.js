/* global _ */
(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($rootScope) {
    var vm = this;

    $rootScope.title = "";

    // it is calculated everytime the controller is loaded.
    vm.randomQuote = _.sample([
      {
        "quote": "Everything should be made as simple as possible, but not simpler",
        "author" : "Albert Einstein"
      },
      {
        "quote": "Simplicity is prerequisite for reliability",
        "author" : "Edsger Dijkstra"
      },
      {
        "quote": "If you can't explain it to a six year old, you don't understand it yourself",
        "author" : "Albert Einstein"
      },
    ]);

  }
})();
