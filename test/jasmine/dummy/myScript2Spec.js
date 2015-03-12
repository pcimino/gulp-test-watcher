/*jshint globalstrict: true*/
'use strict';

describe('Testing myScript2', function() {
    beforeEach(function() {

    });
    it('Should return a value', function() {
        expect(myScript2).toBeDefined();
        expect(myScript2.getValue()).toBe("myScript2");
    });
});
