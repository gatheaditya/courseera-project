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
    url:'/Catogories',
    templateUrl:'templates/Catogories.html' ,
    controller:'myAppController as ctrl',
    resolve:{
      item:['myAppService', function(myAppService){
      return myAppService.getAllCategories();
    }]
  }
  }).
  state('Home',
  {
    url:'/',
    templateUrl:'templates/Home.html'  }

  ).
  state('Items',
  {
    url:'/Items/{shortName}',
    templateUrl:'templates/itemDetails.html',
    controller:'itemDetailController as ctrl2',
    resolve:{
      items:['myAppService','$stateParams',function(myAppService,$stateParams){
        return myAppService.getItemsForCategory($stateParams.shortName);
      }]
    }


  });


}




})();
