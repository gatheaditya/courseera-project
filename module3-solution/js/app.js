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
   toBuy.isEmpty = function() {
    return ShoppingListCheckOffService.boughtIsEmpty();
  };
  toBuy.items= ShoppingListService.getToBuy();
  toBuy.shiftItems = function (itemIndex) {
    ShoppingListService.shiftItems(itemIndex);
   };


  console.log(toBuy.items);

 }
   AlreadyBoughtController.$inject=['ShoppingListService'];
 function AlreadyBoughtController(ShoppingListService)
 {
   var bought = this;
  bought.items  = ShoppingListService.getBought();
  bought.isEmpty = function() {
   return ShoppingListCheckOffService.boughtIsEmpty();
  };

 }
function ShoppingListService()
{
  var service = this;
  var toBuy ={
    item:[{
    name:'cokkies',
    qty:1
  },
  {
  name:'cackes',
  qty:2
},
{
name:'ice-cream',
qty:3
},
{
name:'cokkies',
qty:4
},
{
name:'cokkies',
qty:5
}
]
};
var alreadyBought =
{
  item:[]

};

service.additem= function (name,qty)
{
 var  item ={
   name:name,
   qty:qty
 }
 item.push(item);
}
service.shiftItems = function (itemIndex) {

  var name=toBuy.item[itemIndex].name;
  var qty=toBuy.item[itemIndex].qty;
  var  item ={
    name:name,
    qty:qty
  }
  alreadyBought.item.push(item);
  toBuy.item.splice(itemIndex,1);
   };
service.getToBuy = function () {
     return toBuy;
   };
  service.getBought = function () {
        return alreadyBought;
      };
      service.boughtIsEmpty = function() {
          return bought.item.length === 0;
        };

        service.tobuyIsEmpty = function() {
          return tobuy.item.length === 0;
        };

}
})();
