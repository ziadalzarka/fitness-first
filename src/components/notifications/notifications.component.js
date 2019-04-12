const moment = require('moment');

angular.module('app')
  .component('appNotifications', {
    templateUrl: 'components/notifications/notifications.component.html',
    controller: function($scope, clients) {
      function refresh() {
        const users = clients.list();
        $scope.notifications = users
          .map(client => {
            const a = moment(client.endDate);
            const b = moment();
            const days = a.diff(b, 'days');
            const status = days > 0 ? 'close' : 'inactive';
            return {
              ...client,
              days,
              status,
            };
          })
          .filter(client => client.days <= 2)
          .sort((a, b) => a.days - b.days);
      }

      clients.listeners.push(refresh);
      refresh();
    }
  });