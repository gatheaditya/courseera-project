(function(){
  'use strict';
angular.module('myApp')
.controller('myAppController',myAppController);

myAppController.$inject = ['item','items'];
function myAppController(item,items)
{
var ctrl = this;
ctrl.item1=item.data;

ctrl.item = items.data.menu_items;

// console.log(itemDetails);
}

})();
