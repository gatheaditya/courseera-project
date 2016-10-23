(function(){
  'use strict';
angular.module('myApp')
.controller('itemDetailController', itemDetailController);

itemDetailController.$inject = ['items'];
function itemDetailController(items)
{
var ctrl2 = this;
ctrl2.item = items.data.menu_items;





}

})();
