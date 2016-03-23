"use strict";

var inject = angular.mock.inject,
    module = angular.mock.module,
    testModule = require("./index.js");

describe('Home Controller', function () {

    var sut,
        deferred;

    beforeEach(function () {
        module('ui.router');

        module(testModule);

        var mockHomeService = {};

        module(function ($provide) {
            $provide.value("HomeService", mockHomeService);
            $provide.value("$state", {});
        });

        inject(function($q) {
            deferred = $q.defer();
            mockHomeService.getLocation = function() {};
            spyOn(mockHomeService, 'getLocation').andReturn(deferred.promise);
        });

        inject(function ($controller, $rootScope) {
            sut = $controller("HomeCtrl", {
                $scope : $rootScope
            });
        });

    });

    it('should be defined', function () {
        expect(sut).toBeDefined();
    });
});