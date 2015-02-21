/*global describe, beforeEach, module, inject, it, expect*/
describe('homeCtrl', function(){
    var scope, controller;
    
    beforeEach(function(){
        module('testingApp');
    
        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('homeCtrl', {
                '$scope': scope
            });
        });
    });
    
    it('sets the title', function () {
        expect(scope.title).toBe('Contact table');
    });

});