(function()
{
angular.module('myApp').
service('myAppService',myAppService);
myAppService.$inject = ['$http']
function myAppService($http)
{
  var service = this;
service.getAllCategories = function ()
{
   var response = $http({
    method:'GET',
    url:'https://davids-restaurant.herokuapp.com/categories.json'
  })
  return response;

}
service.getItemsForCategory = function(shortName)

{
  var response = $http({
   method:'GET',
   url:'https://davids-restaurant.herokuapp.com/menu_items.json?category='+shortName
 })
 return response;

}

}

})();
