/* global _ */
(function() {
  'use strict';

  // id generated with Math.random().toString(16).substring(2)
  // created and updated with (new Date()).getTime()
  var SERVER_RESPONSE = [
    {
      "id":"88d14ed8",
      "tags": ["note"],
      "created": 1437000000000,
      "updated": 1437682147650,
      "title": "Interesting note",
      "file": "interesting_note.html",
    },
    {
      "id": "0bb01086",
      "tags": ["poc"],
      "created": 1437682147650,
      "updated": 1437682147650,
      "title": "Interesting poc",
      "file": "interesting_poc.html"
    },
    {
      "id": "655b66b2",
      "tags": ["note","poc"],
      "created": 1437000000000,
      "updated": 1437682147650,
      "title": "Interesting note and poc",
      "file": "interesting_note_poc.html"
    }
  ];

  var ARTICLES = _(SERVER_RESPONSE)
    .map(function(v) {
      v.file = "app/main/articles/" + v.file;
      return v;
    })
    .indexBy("id")
    .value();

  angular
    .module('leanseedsite')
    .constant('ARTICLES', ARTICLES);

})();
