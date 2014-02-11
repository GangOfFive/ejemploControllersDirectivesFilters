var myApp = angular.module('myApp', []);


myApp.controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor = "blackberry"
    $scope.ctrlFlavor2 = "Chocolate"
})

myApp.directive("drink", function() {
    return {
        scope: {
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor">'
    }
})
