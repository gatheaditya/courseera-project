(function(){
  'use strict';
  angular.module("NarrowItDownApp",[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService',MenuSearchService);
  // .directive('NarrowItDownControllerDirective',NarrowItDownControllerDirective);

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService)
{
var found=[];
var list = this;
list.getItems = MenuSearchService.getMatchedMenuItems();
console.log(list.getItems);
}

MenuSearchService.$inject=['$http'];
function MenuSearchService($http)
{
  var service= this;
service.getMatchedMenuItems= function()
{
  var response = $http({
      method:'GET',
      url:'https://davids-restaurant.herokuapp.com/menu_items.json'
    });

    return response;
  }

}

})();
