'use strict';

(function(){angular.module('myApp.pH', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pH', {
    templateUrl: 'prototypicalHierarchy/pH.html'
  });
}])

.controller('pHController',function($scope,$http) {

	 $scope.items = [
	                 { id: 1, name: 'Foo' },
	                 { id: 2, name: 'Bar' }
	             ];	
	$scope.dropDownData = [
	  	                 { id: 1, name: 'Foo' },
		                 { id: 2, name: 'Bar' }
		             ];	
	
})})();