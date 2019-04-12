angular.module('app', ['ui.bootstrap'])
  .component('appClientModal', {
    templateUrl: 'components/client-modal/client-modal.component.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&',
    },
    controller: function($scope) {
      $scope.adding = () => $scope.$ctrl.resolve.mode == 'add';
      $scope.editing = () => $scope.$ctrl.resolve.mode == 'edit';

      $scope.startDatePopup = {
        opened: false,
      };

      $scope.onStartDatePopupClick = function() {
        $scope.startDatePopup.opened = !$scope.startDatePopup.opened;
      }

      $scope.hasError = (inputName) => {
        const invalid = $scope.clientForm[inputName].$invalid;
        const touched = $scope.clientForm[inputName].$touched;
        return invalid & touched ? 'has-error' : '';
      }

      $scope.preventDefault = (event) => {
        event.preventDefault();
      }

      $scope.$ctrl.$onInit = function() {
        const existing = $scope.$ctrl.resolve.client;
        $scope.client = {
          startDate: new Date(),
          ...existing && { ...existing, startDate: new Date(existing.startDate) },
        };
      };

      $scope.handleSubmit = function() {
        if ($scope.clientForm.$invalid) { return; }
        $scope.$ctrl.close({ $value: $scope.client });
      };
    }
  })