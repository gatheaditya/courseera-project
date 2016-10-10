(function(){
  'use strict';
  angular.module("ShoppingList",[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController )
  .service('ShoppingListSrvice',ShoppingListSrvice);
  ToBuyController.$inject=['ShoppingListSrvice'];
 function ToBuyController(ShoppingListSrvice)
 {
  var item=this;

  item.toBuy=ShoppingListSrvice.gettoBuyItems();
   item.shift=ShoppingListSrvice.shiftItem();

 }
   AlreadyBoughtController.$inject=['ShoppingListSrvice'];
 function AlreadyBoughtController(ShoppingListSrvice)
 {
  var list = this;   
  list.bought=ShoppingListSrvice.getboughtItems();

 }

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




service.gettoBuyItems= function()
{
   return toBuy;
}

service.getboughtItems= function()
{
   return bought;
}



service.shiftItem= function (name,qty,indexof)
{
  var bought = 
{
item:[]
};
    
  var newitem = {
      name: name ,
      quantity:qty 
}
bought.item.push(this.newItem);


}

return this.bought;


 }





})();
