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
console.log(list.foundList.length);

}

NarrowItDownController.$inject=['MenuSearchFactory','$http'];
function NarrowItDownController(MenuSearchFactory,$http)
{

var MenuSearchService =  MenuSearchFactory($http);
var list = this;
list.foundItem="";
list.searchitem="";
var promise = MenuSearchService.getMatchedMenuItems();


list.itemFound = function(){

   promise.then(function (response) {
     list.getItems = response.data.menu_items;
     list.getNoOfItems=response.data.menu_items.length;
     list.foundItem=MenuSearchService.matchFoundItems(list.searchitem,list.getItems);


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
}
//meanuservice
MenuSearchFactory.$inject=['$http'];
function MenuSearchService($http)
{
  var service= this;
  var found=[];
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

service.removeItem = function(index)
{
  index = index++;
found.splice(index,1);

}

service.getMatchedMenuItems  = function()
{
  var response = $http({
      method:'GET',
      url:'https://davids-restaurant.herokuapp.com/menu_items.json'
    });

    var data = response;
    return data;

  }

};


//factory to inject menuservice
function MenuSearchFactory()
{
var factory = function($http){
  return new MenuSearchService($http);
};
return factory;
};



})();
