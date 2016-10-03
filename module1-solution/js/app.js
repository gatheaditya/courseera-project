(function () {
'use strict';
angular.module('Lunchcheck', [])
.controller('LunchcheckController', LunchcheckController);

function LunchcheckController ($scope,$injector) {

$scope.displayArraylength= function ()
{
  if($scope.name!=null)
  {
 var check = checkArraylength($scope.name);
 var length= checkIfEmpty(check,$scope.name);

    $scope.length=length;
  }
  else
  {
     $scope.length="PLEASE ENTER DATA";
  }
  }
  function checkArraylength(string)
  {
  var noOfItems= string.split(",");
  var check=0;
  var text = "";
  var string= text.split(",");
  var i;
for (i = 0; i < noOfItems.length; i++) {
if (noOfItems[i]=="") { break; }
      text = i }
if(i==noOfItems.length)
{
text=1;
}
else
{
text=0;
}
return text;
  }

function checkIfEmpty(string,value)
{
  if(string==0)
  {
    
   length="PLEASE ENTER DATA";
  }
  else {
    var noOfItems= value.split(",");
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
$scope.myObj =function styleElements(string)
{
  if(string==0)
  $scope.myObj = {
    "color" : "green",    
    "padding" : "50px",
     "border":"1px solid green"
  }
  else(string==1)
  {
    $scope.myObj = {
    "color" : "red",    
    "padding" : "50px",
     "border":"1px solid green"
  }
  return $scope.myobj;
  }
}



 };
})();
