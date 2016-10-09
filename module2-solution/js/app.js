(function(){
  'use strict';
  angular.module("ShoppingList",[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController );
  ToBuyController.$inject=['$scope'];
 function ToBuyController($scope)
 {
   var p = this;
   p.name="test";
    p.name2="pname2";
 }
   AlreadyBoughtController.$inject=['$scope'];
 function AlreadyBoughtController($scope)
 {
   var c = this;
c.name="test2";
c.name2="new cname2";

 }





})();
