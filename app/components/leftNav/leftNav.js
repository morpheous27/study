'use strict'
	
var leftNavModule = angular.module('leftNavModule',[]);

var leftNavCtrl = leftNavModule.controller('leftNavCtrl', function($scope)
		{
			
		});

var leftNavMenuObject = function()
{	
	var directive = {};
	directive.templateUrl = 'components/leftNav/leftNavHtml.html';
	directive.scope = {
			data : '='
	};
	//directive.controller = leftNavCtrl;
	return directive;
	
};

leftNavModule.directive('leftNavMenu', leftNavMenuObject );		