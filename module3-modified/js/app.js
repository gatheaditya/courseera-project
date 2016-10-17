(function(){
  'use strict';
  angular.module("NarrowItDownApp",[])
  .controller('NarrowItDownController', NarrowItDownController)
  .controller('ShoppingListDirectiveController', ShoppingListDirectiveController)
  .factory('MenuSearchFactory', MenuSearchFactory)
  .directive('foundItems',foundItems);


  function foundItems() {
    var ddo = {

       scope: {
         list: '=foundList',
         items: '=itemsList',
       title: '@'
       },
       // controller: 'ShoppingListDirectiveController as list',
     controller: ShoppingListDirectiveController,
       controllerAs: 'list',
       bindTocontroller: true,
        templateUrl: 'foundList.html'
     };


     return ddo;
   }


//isEmpty funtion

function ShoppingListDirectiveController()
{
var list = this;
if(list.items)
{
  return false;
}
return true;

}

NarrowItDownController.$inject=['MenuSearchFactory'];
function NarrowItDownController(MenuSearchFactory)
{

var MenuSearchService =  MenuSearchFactory();
var list = this;
list.foundItem="";
list.searchitem="";
var promise = MenuSearchService.getMatchedMenuItems();
list.itemFound = function(){

   promise.then(function (response) {
     list.getItems = response.data.menu_items;
     list.getNoOfItems=response.data.menu_items.length;
     list.foundItem=MenuSearchService.matchFoundItems(list.searchitem,list.getItems);
     list.isEmpty=MenuSearchService.isEmpty(list.searchitem,list.foundItem);
   })
   .catch(function (error) {
     console.log("Something went terribly wrong.");
   });
}
//Remove Item function
list.removeItem = function(index){
promise.then(function(response){
   MenuSearchService.removeItem(index);
})
  .catch(function(error){
});
}
 list.isEmpty1 = function()
 {
   if( list.searchitem>0)
   return true;
 }
 return false;
}
//meanuservice
MenuSearchFactory.$inject=['$http'];
function MenuSearchService($http)
{
  var service= this;
  var found=[];

  //Get items from server
  service.getMatchedMenuItems  = function()
  {
    var response = $http({
        method:'GET',
        url:'https://davids-restaurant.herokuapp.com/menu_items.json'
      });

      var data = response;
      return data;

    }
//function to get menu items
service.matchFoundItems= function(searchitem,items)
{

if(searchitem.length>0)
{//begin if
  var i="";
found=[];
  for(i=0;i<items.length;i++)
{//begin for loop
  var searchitem =searchitem.toLowerCase();
  var item = items[i].name.toLowerCase();
  if(item.search(searchitem)==-1){continue;}
  found.push
  ({
    name:items[i].name,
    shortname:items[i].short_name,
    desc:items[i].description
  });

}//end for loop

}//end if
else {
  found=[];

}

  return found;
}


service.isEmpty = function(searchitem,getItems)
{
  if(getItems.length==0 || searchitem=="")
  {
    return true;
  }
  return false;

}

service.removeItem = function(index)
{
  index = index++;
found.splice(index,1);

}


};


//factory to inject menuservice
function MenuSearchFactory()
{
var factory = function(){
  return new MenuSearchService();
};
return factory;
};



})();
