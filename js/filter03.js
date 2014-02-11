var myApp = angular.module('myApp', []);


myApp.controller("AppCtrl", function($scope) {
    $scope.callHome = function(message) {
        alert(message)
    }
})

myApp.directive("phone", function() {
    return {
        scope: {
            dial: "&"
        },
        template: '<input type="text" ng-model="value">' +
          '<input type="button" ng-click="dial({message:value})" value="Call home!">'
    }
})