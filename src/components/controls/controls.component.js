angular.module('app', ['ui.bootstrap'])
  .component('appControls', {
    templateUrl: 'components/controls/controls.component.html',
    controller: ($scope, $uibModal) => {
      console.log($uibModal);
      $scope.openAddClient = () => {
        $uibModal.open({ component: 'appAddClient' });
      };
    }
  });