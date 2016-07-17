'use strict';

// Declare app level module which depends on views, and components
(function(){angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version','leftNavModule','myApp.pH'
]).
controller('myAppController',function($scope)
		{
	
	$scope.leftNavMenuData = [{name:'MenuItemOne',url:'#MenuItemOne',subMenu:[{name:'subMenuOne',url:'#!/view1'},{name:'subMenuTwo',url:'#!/view2'},{name:'HttpCall',url:'#!/view3'},{name:'DropDown',url:'#!/pH'}]},
	                          {name:'MenuItemTwo',url:'#MenuItemTwo',subMenu:[{name:'subMenuOne',url:'#SubMenuOne'},{name:'subMenuTwo',url:'#SubMenuTwo'}]}];
	
	$scope.onChangeAnimal = function(selectedAnimal)
	{
		alert(selectedAnimal.name);
	}
		}).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])})();
