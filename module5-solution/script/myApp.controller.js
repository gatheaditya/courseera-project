(function(){
angular.module('myApp')
.controller('myAppController',myAppController);

myAppController.$inject = ['item'];
function myAppController(item)
{
var ctrl = this;
ctrl.item1=item.data;


// console.log(itemDetails);
}

})();
