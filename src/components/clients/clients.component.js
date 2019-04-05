angular.module('app', [])
  .component('appClients', {
    templateUrl: 'components/clients/clients.component.html',
    controller: ($scope) => {
      $scope.statusClasses = {
        close: 'bg-warning',
        inactive: 'bg-danger'
      };

      $scope.clients = [{
        name: 'زياد الزرقا',
        system: '3 ايام',
        price: 110,
        startDate: new Date(),
        endDate: new Date(),
        status: 'inactive',
      }, {
        name: 'زياد الزرقا',
        system: '3 ايام',
        price: 110,
        startDate: new Date(),
        endDate: new Date(),
        status: 'close',
      }, {
        name: 'زياد الزرقا',
        system: '3 ايام',
        price: 110,
        startDate: new Date(),
        endDate: new Date(),
      }];
    }
  })