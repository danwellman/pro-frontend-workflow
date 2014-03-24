/* global require, Modernizr */
require(['core', 'ui'], function (core, ui) {
    'use strict';

    console.log('Core module loaded ', core);

    if (Modernizr.canvas) {
        console.log('Canvas is present!');
    }

    ui.createUI();
    
});