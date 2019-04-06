angular.module('app', ['ui.bootstrap'])
  .component('appClients', {
    templateUrl: 'components/clients/clients.component.html',
    controller: ($scope, $uibModal) => {
      $scope.statusClasses = {
        close: 'bg-warning',
        inactive: 'bg-danger'
      };

      $scope.openDeleteClientModal = () => {
        $uibModal.open({ component: 'appDeleteClientModal' });
      };

      $scope.clients = [{
        id: 1,
        name: 'زياد الزرقا',
        phone: '01096707442',
        system: '3 ايام',
        price: 110,
        startDate: new Date(),
        endDate: new Date(),
        status: 'inactive',
      }, {
        id: 2,
        name: 'زياد الزرقا',
        phone: '01096707442',
        system: '3 ايام',
        price: 110,
        startDate: new Date(),
        endDate: new Date(),
        status: 'close',
      }, {
        id: 3,
        name: 'زياد الزرقا',
        phone: '01151002051',
        system: '3 ايام',
        price: 110,
        startDate: new Date(),
        endDate: new Date(),
      }];
    }
  })