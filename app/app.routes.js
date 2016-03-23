'use strict';

routes.$inject = ['$urlRouterProvider', '$locationProvider'];

function routes($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

module.exports = routes;