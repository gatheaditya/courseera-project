(function(){
  'use strict';
angular.module('myApp')
.component('myAppComponent',{
  templateUrl: 'templates/test.html',
   bindings: {items: '<'}
});



})();
