const { remote } = require('electron');

angular.module('app', ['ui.bootstrap'])
  .component('appControls', {
    templateUrl: 'components/controls/controls.component.html',
    controller: function($scope, $uibModal, clients) {
      $scope.openAddClientModal = function() {
        const modal = $uibModal.open({
          component: 'appClientModal',
          resolve: {
            mode: () => 'add',
          }
        });
        modal.result.then(client => clients.create(client));
      };

      $scope.exit = function() {
        remote.app.exit();
      };
    }
  });