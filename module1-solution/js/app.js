(function () {
'use strict';
angular.module('Lunchcheck', [])
.controller('LunchcheckController', LunchcheckController);

function LunchcheckController ($scope, $injector) {

$scope.displayArraylength= function ()
{
  if($scope.name!=null)
  {
 var length= checkIfEmpty($scope.name);
    $scope.length=length;
  }
  else
  {
     $scope.length="PLEASE ENTER DATA";
  }
  }

function checkIfEmpty(string)
{
  if(string==0|| string==undefined)
  {
    
   length="PLEASE ENTER DATA";
  }
  else {
    var noOfItems= string.split(",");
    if(noOfItems.length>3)
    {
      length="TOO MUCH";
    }
    else {
    length="ENJOY!"
    }

  }
return length;
}
 };
})();
