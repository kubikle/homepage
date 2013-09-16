var app = angular.module('cubicle', ['ngResource', 'ngRoute', 'ngAnimate']);
var TEMPLATE_URL_BASE = 'html/';
//Route configuration
app.config(function($routeProvider) {
    $routeProvider.
        when('/demo/', {controller:DemoController, templateUrl:TEMPLATE_URL_BASE + 'demo.html'}).
        when('/about/', {controller:AboutController, templateUrl:TEMPLATE_URL_BASE + 'about.html'}).
        when('/contact/', {controller:ContactController, templateUrl:TEMPLATE_URL_BASE + 'contact.html'}).
        otherwise({redirectTo:'/demo/'});
});