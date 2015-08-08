/* global _ */

(function() {
  'use strict';

  angular
    .module('leanseedsite')
    .controller('IndexController', IndexController)
    .controller('IndextToastCookiesController', IndextToastCookiesController);

  /** @ngInject */
  function IndexController($location, $mdSidenav, $mdToast, $routeParams, $scope, $window, localStorageService) {
    var vm = this;

    vm.menuItems = [
      { title: "All articles", pageUrl: "/#!/articles", icon: "filter_none"},
      { title: "Notes", pageUrl: "/#!/articles", tags: "note", icon: "assignment"},
      { title: "Pocs", pageUrl: "/#!/articles", tags: "poc", icon: "extension"},
      { title: "About", contentTitle: "The Lean Seed", pageUrl: "/#!/about", icon: "face"}
    ];
    vm.toggleSidenav = toggleSidenav;
    vm.menuUrl = menuUrl;

    if (!localStorageService.get("accept_cookies")) {
      $mdToast.show({
        controller: 'IndextToastCookiesController',
        templateUrl: 'app/index.toast.cookies.html',
        hideDelay: 0,
        position: "top left right"
      });
    }

    $scope.$on("$routeChangeSuccess", function handleRouteChangeEvent() {
      vm.menuItemSelected = _(vm.menuItems)
        .find(function(menuItem){
          var pathWithoutId = _.trimRight("/#!" + $location.path(), "/" + $routeParams.id);
          var samePath = pathWithoutId === menuItem.pageUrl;
          var sameTags = $routeParams.tags === menuItem.tags;

          return samePath && sameTags;
        });
    });

    $scope.$on('$viewContentLoaded', function() {
      $window.ga('send', 'pageview', { page: $location.url() });
    });

    function toggleSidenav(menuId) {
      $mdSidenav(menuId).toggle();
    }

    function menuUrl(menuItem) {
        var queryString = menuItem.tags ? "?tags=" + encodeURIComponent(menuItem.tags) : "";
        return menuItem.pageUrl + queryString;
    }
  }

  function IndextToastCookiesController($scope, $mdToast, localStorageService) {
    $scope.acceptCookies = function() {
      localStorageService.set("accept_cookies", true);
      $mdToast.hide();
    };
  }
})();
