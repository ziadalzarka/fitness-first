const { remote } = require('electron');

angular.module('app', []).component('appHeader', {
  templateUrl: 'components/header/header.component.html',
  controller: function ($scope) {

    $scope.minimize = function () {
      remote.getCurrentWindow().minimize();
    }

    $scope.maximize = function () {
      const maximized = remote.getCurrentWindow().isMaximized();
      if (maximized) {
        remote.getCurrentWindow().unmaximize();
      } else {
        remote.getCurrentWindow().maximize();
      }
    };

    $scope.close = function () {
      remote.app.exit();
    };
  }
});
