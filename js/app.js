var app = angular.module('cubicle', ['ngResource', 'ngRoute', 'ngAnimate']);
var TEMPLATE_URL_BASE = 'html/';
//Route configuration
app.config(function($routeProvider) {
    $routeProvider.
        when('/demo/', {controller:DemoController, templateUrl:TEMPLATE_URL_BASE + 'demo.html'}).
        when('/game/', {controller:GameController, templateUrl:TEMPLATE_URL_BASE + 'game.html'}).
        otherwise({redirectTo:'/demo/'});
});