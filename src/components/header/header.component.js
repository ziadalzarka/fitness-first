const { remote } = require('electron');

angular.module('app', []).component('appHeader', {
  templateUrl: 'components/header/header.component.html',
  controller: ($scope) => {

    $scope.minimize = () => {
      remote.getCurrentWindow().minimize();
    }

    $scope.maximize = () => {
      const maximized = remote.getCurrentWindow().isMaximized();
      if (maximized) {
        remote.getCurrentWindow().unmaximize();
      } else {
        remote.getCurrentWindow().maximize();
      }
    };

    $scope.close = () => {
      remote.app.exit();
    };
  }
});
