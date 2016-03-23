"use strict";

// var html = require('./home.html');

function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });
}

routes.$inject = ['$stateProvider'];

module.exports = routes;