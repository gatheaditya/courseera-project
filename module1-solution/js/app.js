(function () {
'use strict';
angular.module('Lunchcheck', [])
.controller('LunchcheckController', LunchcheckController);

function LunchcheckController ($scope, $injector) {

$scope.displayArraylength= function ()
{
 var length= checkIfEmpty($scope.name);
    $scope.length=length;
  }
function checkIfEmpty(string)
{
  if(string!=null)
  {
    var noOfItems= string.split(",");
    if(noOfItems.length>3)
    {
      length="TOO MUCH";
    }
    else {
    length="ENJOY!"
    }

  }
  else {
length="PLEASE ENTER DATA";
  }
return length;
}
 };
})();
