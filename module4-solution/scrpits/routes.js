(function(){
  'use strict';

angular.module('MenuApp')
.config('configRoutes');

configRoutes.$inject =['$stateProvider','$urlRouteProvider'];
function configRoutes($stateProvider,$urlRouteProvider)
{
$stateProvider
.state('home',{
  url:'/',
  templateUrl:'test.html'
});

}


})();
