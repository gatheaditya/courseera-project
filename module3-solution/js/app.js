(function(){
  'use strict';
  angular.module("NarrowItDownApp",[])
  .controller('NarrowItDownController', NarrowItDownController)
  .factory('MenuSearchFactory', MenuSearchFactory);
  // .directive('NarrowItDownControllerDirective',NarrowItDownControllerDirective);

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

  var i="";

for(i=0;i<items.length;i++)
{
  var searchitem =searchitem.toLowerCase();
  var item = items[i].name.toLowerCase();
  if(item.search(searchitem)==-1){continue;}
  found.push(items[i].name);
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
