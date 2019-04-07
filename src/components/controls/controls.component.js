const { remote } = require('electron');

angular.module('app', ['ui.bootstrap'])
  .component('appControls', {
    templateUrl: 'components/controls/controls.component.html',
    controller: function ($scope, $uibModal) {
      $scope.openAddClientModal = function () {
        $uibModal.open({ component: 'appClientModal' });
      };

      $scope.exit = function () {
        remote.app.exit();
      };
    }
  });