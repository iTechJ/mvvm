var app = angular.module('angular-example', ['recordServices', 'ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when("/home", {templateUrl: "views/home.html", controller: app.HomeCtrl }).
        when("/routing", {templateUrl: "views/route.html", controller: app.RouteCtrl}).
        when("/services", {templateUrl: "views/service.html", controller: app.ServiceCtrl}).
        when("/controlling", {templateUrl: "views/controlling.html", controller: app.UICtrl}).
        when("/docs", {templateUrl: "views/supplementary/docs.html", controller: app.DocsCtrl}).
        otherwise({redirectTo: "/home"});

}]);