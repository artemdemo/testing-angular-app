/*global testingApp, setTimeout, angular*/
(function(app){
    "use strict";
    
    /**
     *
     */
    var peopleFactory = function($http, $q) {
        var peopleFactory = {};
        
        var People = null;
        
        /**
         * Loading people data from the server
         *
         * @return {Promise}
         */
        peopleFactory.loadPeople = function() {
            var deferred = $q.defer();
            
            setTimeout(function(){
                $http.get('data/people.json')
                    .success(function( data ){
                        peopleFactory.setPeople(data);
                        deferred.resolve(data);
                    })
                    .error(function(){
                        deferred.reject();
                    });
            }, 200);
            
            return deferred.promise;
        };
        
        /**
         * Set People array
         *
         */
        peopleFactory.setPeople = function( newPeople ){ People = newPeople };
        
        /**
         * Return total balance
         *
         * @return {Number}
         */
        peopleFactory.getTotalBalance = function() {
            var total = 0;
            
            if ( ! angular.isArray(People) ) return 0;
            
            for( var i=0; i<People.length; i++ ){
                var person = People[i];
                console.log( person );
                if ( angular.isNumber( person.balance ) ) total += parseFloat( person.balance );
                else return 0;
            }
            
            return total;
        };
        
        return peopleFactory;
    };
    
    app.factory('peopleFactory', ['$http', '$q', peopleFactory]);
    
})(testingApp);