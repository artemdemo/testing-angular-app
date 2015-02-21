/*global testingApp, console*/
(function(app){
    "use strict";
    
    /**
     * Home Page Controller
     *
     * @class homeCtrl
     * @memberof Controllers
     * @param $scope
     */
    var homeCtrl = function($scope, peopleFactory) {
        
        $scope.title = "Contact table";
        
        peopleFactory.loadPeople()
            .then(function(peopleData){
                $scope.people = peopleData;
                $scope.totalBalance = peopleFactory.getTotalBalance();
            });
    };
    
    app.controller('homeCtrl', ['$scope', 'peopleFactory', homeCtrl]);
    
})(testingApp);