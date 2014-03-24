/*global describe, it, define, expect */
'use strict';

define(['../../app/scripts/core'], function (core) {
    describe('The Core module', function () {
        describe('Initialisation', function () {
            it('should expose an init method', function () {
                expect(core.init).toBeDefined();
            });
        });
    });
});