"use strict";

function routes($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            template: require('./about.html'),
            controller: 'AboutCtrl',
            controllerAs: 'about'
        });
}

routes.$inject = ['$stateProvider'];

module.exports = routes;