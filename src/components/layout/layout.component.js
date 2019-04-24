angular.module('app', [])
  .component('appLayout', {
    templateUrl: 'components/layout/layout.component.html',
    controller: function($scope, auth) {
      $scope.state = 'connecting';
      auth.check()
        .then((state) => {
          $scope.$apply(() => {
            $scope.state = state;
          });
        })
        .catch(() => {
          $scope.$apply(() => {
            $scope.state = 'error';
          });
        });
    }
  })