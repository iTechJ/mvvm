var app = angular.module('angular-example', ['ngResource', 'ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when("/home", {templateUrl: "views/home.html", controller: app.HomeCtrl }).
        when("/routing", {templateUrl: "views/route.html", controller: app.RouteCtrl}).
        when("/resource", {templateUrl: "views/resource.html", controller: app.ResourceCtrl}).
        when("/controlling", {templateUrl: "views/controlling.html", controller: app.UICtrl}).
        when("/docs", {templateUrl: "views/supplementary/docs.html", controller: app.DocsCtrl}).
        otherwise({redirectTo: "/home"});
}]);