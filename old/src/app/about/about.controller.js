/* global _ */
(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($rootScope) {
    var vm = this;

    $rootScope.pageTitle = "";

    // it is calculated everytime the controller is loaded.
    vm.randomQuote = _.sample([
      {
        "quote": "Everything should be made as simple as possible, but not simpler",
        "author" : "Albert Einstein"
      },
      {
        "quote": "If you can't explain it to a six year old, you don't understand it yourself",
        "author" : "Albert Einstein"
      },
      {
        "quote": "Simplicity is prerequisite for reliability",
        "author" : "Edsger Dijkstra"
      },
      {
        "quote": "Build-Measure-Learn feedback loop is at the core of the Lean Startup model",
        "author" : "Eric Ries"
      },
      {
        "quote": "As you consider building your own minimum viable product, let this simple rule suffice: remove any feature, process, or effort that does not contribute directly to the learning you seek",
        "author" : "Eric Ries"
      },
      {
        "quote": "Simplicity is the ultimate sophistication",
        "author" : "Leonardo da Vinci"
      },
      {
        "quote": "I'm as proud of many of the things we haven't done as the things we have done. Innovation is saying no to a thousand things",
        "author" : "Steve Jobs"
      },
    ]);

  }
})();
