const { remote } = require('electron');

angular.module('app', ['ui.bootstrap'])
  .component('appControls', {
    templateUrl: 'components/controls/controls.component.html',
    controller: ($scope, $uibModal) => {
      $scope.openAddClientModal = () => {
        $uibModal.open({ component: 'appClientModal' });
      };

      $scope.exit = () => {
        remote.app.exit();
      };
    }
  });