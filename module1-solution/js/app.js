(function () {
'use strict';
angular.module('Lunchcheck', [])
.controller('LunchcheckController', LunchcheckController);

function LunchcheckController ($scope) {

$scope.displayArraylength= function ()
{
 var length= checkIfEmpty($scope.name);
    $scope.length=length;
  }

function checkIfEmpty(string)
{
var noofitems= string.split(",");
if(noofitems.length>3)
{
  length="TOO MUCH";
}
else {
length="ENJOY!"
}
return length;
}


 };







})();
