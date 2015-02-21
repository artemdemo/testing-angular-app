/*global angular*/
var testingApp = angular.module('testingApp', ['ui.router']);

(function(app){
    "use strict";
    
    var config = function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'pages/home.html'
            });
    };
    
    app.config(['$stateProvider', '$urlRouterProvider', config]);
    
})(testingApp);