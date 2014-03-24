/* global define */
define(['templates', 'articles'], function (templates, articles) {
    'use strict';

    var self = {};

    self.createUI = function createUI() {
        var html = templates['app/templates/template.hbs'](articles);
        $('.hero-unit').find('ul').html(html);
    };

    return self;
});