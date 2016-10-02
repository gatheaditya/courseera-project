(function () {
2 'use strict';
3

4 angular.module('LunchCheck', [])
5

6 .controller('LunchCheckController', function ($scope) {
7   $scope.name = "";
8   $scope.totalValue = 0;
9

10   $scope.displayNumeric = function () {
11     var totalNameValue = calculatNumericForString($scope.name);
12     $scope.totalValue = totalNameValue;
13   };
14

15

16   function calculatNumericForString(string) {
17     var totalStringValue = 0;
18     for (var i = 0; i < string.length; i++) {
19       totalStringValue += string.charCodeAt(i);
20     }
21

22     return totalStringValue;
23   }
24

25 });
26

27

28 })();
