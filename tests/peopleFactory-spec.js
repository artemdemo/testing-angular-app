/*global describe, beforeEach, module, inject, it, expect, $injector*/
describe('peopleFactory', function(){
    var factory;
    
    beforeEach(module('testingApp'));
    
    beforeEach(inject(function ($injector) {
        factory = $injector.get('peopleFactory');
    }));
    
    it('total balance should be 0 if People value is not array', function () {
        factory.setPeople({});
        expect(factory.getTotalBalance()).toBe(0);
    });
    
    it('total balance should be 0 if one of balance values isn\'t number', function () {
        factory.setPeople([
            { balance: 100 },
            { balance: "?" },
            { balance: 9.5 },
        ]);
        expect(factory.getTotalBalance()).toBe(0);
    });
    
    it('total balance should be 120 for given People array', function () {
        factory.setPeople([
            { balance: 100 },
            { balance: 10.5 },
            { balance: 9.5 },
        ]);
        expect(factory.getTotalBalance()).toBe(120);
    });

});