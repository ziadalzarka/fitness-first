angular.module('app')
  .component('appNotifications', {
    templateUrl: 'components/notifications/notifications.component.html',
    controller: function($scope) {
      $scope.notifications = [{
        id: 1,
        name: 'زياد الزرقا',
        status: 'inactive',
        days: -6,
      }, {
        id: 2,
        name: 'زياد الزرقا',
        status: 'inactive',
        days: -4,
      }, {
        id: 3,
        name: 'زياد الزرقا',
        status: 'close',
        days: 2,
      }];
    }
  });