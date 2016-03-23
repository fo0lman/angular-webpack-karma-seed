"use strict";

var inject = angular.mock.inject,
    module = angular.mock.module,
    testModule = require("./index.js");

describe('About Controller', function () {

    var sut,
        deferred;

    beforeEach(function () {
        module('ui.router');

        module(testModule);

        var mockAboutService = {};

        module(function ($provide) {
            $provide.value("AboutService", mockAboutService);
            $provide.value("$state", {});
        });

        inject(function($q) {
            deferred = $q.defer();
            mockAboutService.getLocation = function() {};
            spyOn(mockAboutService, 'getLocation').andReturn(deferred.promise);
        });

        inject(function ($controller, $rootScope) {
            sut = $controller("AboutCtrl", {
                $scope : $rootScope
            });
        });

    });

    it('should be defined', function () {
        expect(sut).toBeDefined();
    });
});