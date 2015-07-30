/* global _ */
(function() {
  'use strict';

  /*****************************************************************************

  Tags used:
  * note: any article that contains reference notes such as howtos
  * poc: a proof of concept

  Fields:
  * id:  generated with Math.random().toString(16).substring(2)
  * created: generated with (new Date()).getTime() when the article is finished
  * updated: generated with (new Date()).getTime() for "big" updates

  *****************************************************************************/
  var SERVER_RESPONSE = [
    {
      "id": "655b66b2",
      "tags": ["note","poc"],
      "created": 1438279385044,
      "updated": null,
      "title": "About this web site",
      "file": "aboutThisWebSite.html"
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
