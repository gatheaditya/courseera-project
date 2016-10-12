(function(){
  'use strict';
  angular.module("NarrowItDownApp",[])
  .controller('NarrowItDownController ', NarrowItDownController )
  .service('MenuSearchService',MenuSearchService)
  .directive('NarrowItDownControllerDirective',NarrowItDownControllerDirective);

NarrowItDownController.$inject['MenuSearchService'];
function NarrowItDownController(MenuSearchService)
{
var found=[];
var list = this;

}

function MenuSearchService()
{
  var service= this;

service.getMatchedMenuItems(searchItem)
{

}

}



}
})();
