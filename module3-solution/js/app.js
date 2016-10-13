(function(){
  'use strict';
  angular.module("NarrowItDownApp",[])
  .controller('NarrowItDownController', NarrowItDownController)
  .factory('MenuSearchFactory', MenuSearchFactory);
  // .directive('NarrowItDownControllerDirective',NarrowItDownControllerDirective);

NarrowItDownController.$inject=['MenuSearchFactory','$http'];
function NarrowItDownController(MenuSearchFactory,$http)
{
var found=[];
var MenuSearchService =  MenuSearchFactory($http);
var list = this;
var promise = MenuSearchService.getMatchedMenuItems();
     promise.then(function (response) {
     list.getItems = response.data;
     console.log(list.getItems.menu_items[0].id);

   })
   .catch(function (error) {
     console.log("Something went terribly wrong.");
   });

}

MenuSearchFactory.$inject=['$http'];
function MenuSearchService($http)
{
  var service= this;
service.getMatchedMenuItems  = function()
{
  var response = $http({
      method:'GET',
      url:'https://davids-restaurant.herokuapp.com/menu_items.json'
    });

    return response;
  };
};
function MenuSearchFactory()
{
var factory = function($http){
  return new MenuSearchService($http);
};
return factory;
};



})();
