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
<<<<<<< HEAD
     list.getItems = response.data.menu_items;
     list.getNoOfItems=response.data.menu_items.length;
     list.foundItem=MenuSearchService.matchFoundItems(list.searchitem,list.getItems);
=======
     list.getItems = response.data.menu_items;  
     list.getNoOfItems=response.data.menu_items.length;
     list.foundItem=MenuSearchService.matchFoundItems(list.searchitem,list.getItems);   
>>>>>>> 98a68d1ff69ae99ee89896e26d44c41d935ad54a
   })
   .catch(function (error) {
     console.log("Something went terribly wrong.");
   });
   
}
}
//meanuservice
MenuSearchFactory.$inject=['$http'];
function MenuSearchService($http)
{
  var service= this;
  //function to get menu items

service.matchFoundItems= function(searchitem,items)
{
 var found=[];
  var i="";
for (i = 0; i < items.length; i++) {
    if (searchitem != items[i].name) { continue; }
    found.push( items[i].id) ;
    console.log(items[i].name);
<<<<<<< HEAD

=======
    
>>>>>>> 98a68d1ff69ae99ee89896e26d44c41d935ad54a

}

  return found;
}


service.getMatchedMenuItems  = function()
{
  var response = $http({
      method:'GET',
      url:'https://davids-restaurant.herokuapp.com/menu_items.json'
    });

    var data = response;
    return data;
<<<<<<< HEAD

=======
    
>>>>>>> 98a68d1ff69ae99ee89896e26d44c41d935ad54a
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

