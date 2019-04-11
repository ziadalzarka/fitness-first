angular.module('app', ['ui.bootstrap', 'gray'])
  .component('appClients', {
    templateUrl: 'components/clients/clients.component.html',
    controller: function($scope, $uibModal, clients) {
      $scope.statusClasses = {
        close: 'bg-warning',
        inactive: 'bg-danger'
      };

      $scope.openDeleteClientModal = function () {
        $uibModal.open({ component: 'appDeleteClientModal' });
      };

      $scope.query = '';

      function refresh() {
        $scope.clients = clients.list();
      }

      clients.listeners.push(refresh);
      refresh();
    }
  })