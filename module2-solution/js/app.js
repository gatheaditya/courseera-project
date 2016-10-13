(function(){
  'use strict';
  angular.module("ShoppingList",[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController )
  .service('ShoppingListSrvice',ShoppingListSrvice);
//ToBuyController
  ToBuyController.$inject=['ShoppingListSrvice'];
 function ToBuyController(ShoppingListSrvice)
 {
  var item=this;

  item.toBuy=ShoppingListSrvice.gettoBuyItems();
   item.shift= function(indexof)
   {
     ShoppingListSrvice.shiftItems();
   }
  

 }
//AlreadyBoughtControllert

   AlreadyBoughtController.$inject=['ShoppingListSrvice'];
 function AlreadyBoughtController(ShoppingListSrvice)
 {
  var list=this;
  list.bought=ShoppingListSrvice.getboughtItems();

}
//////// ShoppingListSrvice service begins here
 function ShoppingListSrvice()
 {

var service = this;
var toBuy = {
item:[{name:"name1",qty:1},
{name:"name2",qty:2},
{name:"name3",qty:3},
{name:"name4",qty:4},
{name:"name4",qty:5}

]};

 var bought = 
{item:[]}


service.gettoBuyItems= function()
{
   return toBuy;
}

service.getboughtItems= function()
{
   return bought;
}

service.shiftItems= function(indexof)
{
  var name=service.tobuy.item[0].name;
  var qty=service.tobuy.item[0].qty;
    var newItem={ 
    name:name,
    qty:qty
  }
   bought.item.push(newItem) ;


  }






}





})();
