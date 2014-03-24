/* global requirejs */
requirejs.config({
    paths: {
        'handlebars': '../bower_components/handlebars/handlebars.runtime'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});