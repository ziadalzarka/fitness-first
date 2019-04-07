angular.module('app', ['ui.bootstrap'])
  .component('appClientModal', {
    templateUrl: 'components/client-modal/client-modal.component.html',
    bindings: {
      close: '&',
      dismiss: '&',
    },
    controller: function($scope, clients) {
      $scope.mode = 'add';

      $scope.adding = () => $scope.mode == 'add';
      $scope.editing = () => $scope.mode == 'edit';

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

      $scope.client = {};

      $scope.handleAdd = function() {
        if ($scope.clientForm.$invalid) { return; }
        clients.create($scope.client);
        $scope.$ctrl.close();
      };
    }
  })