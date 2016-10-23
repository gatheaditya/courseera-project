(function(){

angular.module('myApp')
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider)
{
$urlRouterProvider.otherwise('/');

  $stateProvider.
  state('Catogories',
  {
    url:'Catogories',
    templateUrl:'templates/test.html' ,
    controller:'myAppController as ctrl',
    resolve:{
      item:['myAppService', function(myAppService){
      return myAppService.getAllCategories();
    }]
  }
  }).
  state('Home',
  {
    url:'Home',
    template:'test2'  }

  ).
  state('Items',
  {
    url:'Items/{shortName}',
    templateUrl:'templates/test1.html',
    controller:'itemDetailController as ctrl2',
    resolve:{
      items:['myAppService','$stateParams',function(myAppService,$stateParams){
        return myAppService.getItemsForCategory($stateParams.shortName);
      }]
    }


  });


}




})();
