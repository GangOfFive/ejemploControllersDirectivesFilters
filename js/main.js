var myApp = angular.module('myApp', []);
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
