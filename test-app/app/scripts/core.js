/* global define, Modernizr */
/* jshint indent:4 */
define(function () {
    'use strict';

    var self = {};

    self.init = function init() {
        console.log('Core module initialised!');
    };

    console.log('Module ready');

    if (Modernizr.canvas) {
        console.log('Canvas!');
    }

    return self;
});