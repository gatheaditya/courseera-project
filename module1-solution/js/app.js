(function () {
'use strict';
angular.module('Lunchcheck', [])
.controller('LunchcheckController', LunchcheckController);

function LunchcheckController ($scope) {


$scope.CheckInit = function ()
{
  var length= checkString($scope.name);
     $scope.length=length;
   }
}

$scope.displayArraylength= function ()
{
 var length= checkIfEmpty($scope.name);
    $scope.length=length;
  }

function checkString(string)
{
  if(string==0)
  {
    length ="";
  }
  else {

  }
  return length;
}
function checkIfEmpty(string)
{
  if()
var noofitems= string.split(",");
if(noofitems.length>3)
{
  length="TOO MUCH";
}
else {
length=" Enjoy!";
}
return length;
}


 };







})();
