(function(){

angular.module('myApp')
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider)
{
$urlRouterProvider.otherwise('/');

  $stateProvider.
  state('test1',
  {
    url:'test1',
    templateUrl:'test.html'  }

  ).
  state('test2',
  {
    url:'test2',
    template:'test2'  }

  ).
  state('test3',
  {
    url:'test3',
    template:'test3'  }

  );


}




})();
