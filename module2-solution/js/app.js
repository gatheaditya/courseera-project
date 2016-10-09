(function(){
  'use strict';
  angular.module("ShoppingList",[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController )
  .service('ShoppingListService',ShoppingListService);
  ToBuyController.$inject=['ShoppingListService'];
 function ToBuyController(ShoppingListService)
 {
   var toBuy = this;
  toBuy.items= ShoppingListService.getToBuy();
  toBuy.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
   };


  console.log(toBuy.items);

 }
   AlreadyBoughtController.$inject=['ShoppingListService'];
 function AlreadyBoughtController(ShoppingListService)
 {
   var bought = this;
  bought.items  = ShoppingListService.getBought();
bought.items=ShoppingListService.getBought();

 }
function ShoppingListService()
{
  var service = this;
  var toBuy ={
    item:[{
    name:'name1',
    qty:3
  },
  {
    name:'name2',
    qty:3
  }]
};
var alreadyBought =
{
  item:[{
  name:'name1',
  qty:3
},
{
  name:'name2',
  qty:3
}]

};

service.additem= function (name,qty)
{
 var  item ={
   name:name,
   qty:qty
 }
 item.push(item);
}
service.removeItem = function (itemIndex) {
  var  item ={
    name:name,
    qty:qty
  }
  item.push(item);
   };
service.getToBuy = function () {
     return toBuy;
   };
  service.getBought = function () {
        return alreadyBought;
      };

}
})();
