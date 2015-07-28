/* global _ */

(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($location, $mdSidenav, $routeParams, $scope) {
    var vm = this;

    vm.menuItems = [
      { title: "All articles", contentTitle: "All the articles", pageUrl: "/#/articles", icon: "filter_none"},
      { title: "Notes", contentTitle: "Random notes", pageUrl: "/#/articles", tags: "note", icon: "assignment"},
      { title: "Pocs", contentTitle: "Proof of Concepts", pageUrl: "/#/articles", tags: "poc", icon: "extension"},
      { title: "About", contentTitle: "The Lean Seed", pageUrl: "/#/about", icon: "face"}
    ];
    vm.toggleSidenav = toggleSidenav;
    vm.menuUrl = menuUrl;

    $scope.$on("$routeChangeSuccess", function handleRouteChangeEvent() {
      vm.menuItemSelected = _(vm.menuItems)
        .find(function(menuItem){
          var pathWithoutId = _.trimRight("/#" + $location.path(), "/" + $routeParams.id);
          var samePath = pathWithoutId === menuItem.pageUrl;
          var sameTags = $routeParams.tags === menuItem.tags;

          return samePath && sameTags;
        });
    });

    function toggleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    }

    function menuUrl(menuItem) {
        var queryString = menuItem.tags ? "?tags=" + encodeURIComponent(menuItem.tags) : "";
        return menuItem.pageUrl + queryString;
    }
  }
})();
