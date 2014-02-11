var myApp = angular.module('myApp', []);

/**** Filters ****/

myApp.factory('Data', function() {
    return {message: "Datos de un servicio"}
})

myApp.filter('reverse', function(Data) {
    return function(text) {
      return text.split("").reverse().join("");
  }
})

myApp.controller("DataCtrl", function($scope, Data){
	$scope.data = Data;

	$scope.reversedMessage = function(message) {
	return message.split("").reverse().join("");
	}
});

/**** Directives ****/

myApp.controller("AppCtrl", function($scope) {
    $scope.paramFlavor = "Orange"
})
myApp.directive("drink", function() {
    return {
        scope: {
            flavor: "@"
        },
        template: '<div>{{flavor}}</div>'
    }
})
