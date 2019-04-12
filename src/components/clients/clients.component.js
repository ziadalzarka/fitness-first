angular.module('app', ['ui.bootstrap', 'gray'])
  .component('appClients', {
    templateUrl: 'components/clients/clients.component.html',
    controller: function($scope, $uibModal, clients) {
      $scope.statusClasses = {
        close: 'bg-warning',
        inactive: 'bg-danger'
      };

      $scope.openEditClientModal = function(selectedClient) {
        const modal = $uibModal.open({
          component: 'appClientModal',
          resolve: {
            mode: () => 'edit',
            client: () => selectedClient,
          }
        });
        modal.result.then(client => clients.update(client.id, client));
      }

      $scope.openDeleteClientModal = function(client) {
        const modal = $uibModal.open({ component: 'appDeleteClientModal' });
        modal.result.then(() => clients.remove(client.id))
      };

      $scope.query = '';

      function refresh() {
        $scope.clients = clients.list();
      }

      clients.listeners.push(refresh);
      refresh();

      $scope.renewClientSubscription = (client) => {
        clients.update(client.id, { startDate: new Date() });
      };
    }
  })