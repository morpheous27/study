'use strict';

(function(){angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html'
  });
}])

.controller('View3Ctrl',function($scope,$http) {

	$http.get("https://api.github.com/users/mojombo")
	.then(function(response){
		$scope.user = response.data;
	});
})})();