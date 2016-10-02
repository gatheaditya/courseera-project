(function () {
'use strict';
angular.module('Lunchcheck', [])
.controller('LunchcheckController', LunchcheckController);
function LunchcheckController ($scope) {

$scope.displayArraylength= function ()
{
  if($scope.name==0)
  {
    $scope.length="";
  };
  var length =noOfItems($scope.name);
  $scope.length=length;
}

function noOfItems(name)
{
  var items = name.length;
  return items;
}
 };







})();
