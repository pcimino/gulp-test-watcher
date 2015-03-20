/*jshint globalstrict: true*/
'use strict';

describe('Testing myScript1', function() {

    beforeEach(function() {
    });
    
    it('Should return a value', function() {
        expect(myScript1).toBeDefined();
        expect(myScript1.getValue()).toBe("myScript1");
    });
});
