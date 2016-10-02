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

 var length= checkIfEmpty($scope.name);
    $scope.length=length;
}


function checkIfEmpty(string)
{
var noofitems= string.split(",");
return noofitems.length;
}


 };







})();
