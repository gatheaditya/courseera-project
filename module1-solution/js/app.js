(function () {

angular.module('Lunchcheck', [])
.controller('LunchcheckController', LunchcheckController);

LunchcheckController.$inject=['$scope'];

function LunchcheckController ($scope) {

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
  var i;
  var text;
for (i = 0; i < noOfItems.length; i++) {
if (noOfItems[i]=="") { continue; }
    text = i }

return text;
  }

function checkIfEmpty(string,arg)
{
if(arg!="")
{

 if(string>3) {

      length="TOO MUCH";
    }
    else {
    length="ENJOY!"
    }
}
else {
  {
    length="please enter data";
  }
}

return length;
}




 };


})();
