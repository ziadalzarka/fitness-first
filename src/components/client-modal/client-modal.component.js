angular.module('app', ['ui.bootstrap'])
  .component('appClientModal', {
    templateUrl: 'components/client-modal/client-modal.component.html',
    controller: ($scope) => {
      $scope.mode = 'add';

      $scope.adding = () => $scope.mode == 'add';
      $scope.editing = () => $scope.mode == 'edit';

      $scope.startDatePopup = {
        opened: false,
      };

      $scope.onStartDatePopupClick = () => {
        $scope.startDatePopup.opened = !$scope.startDatePopup.opened;
      }
    }
  })