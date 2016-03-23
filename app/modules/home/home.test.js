"use strict";

describe('Home Controller', function () {

    var homeModule = require("./index.js");
    var sut, deferred;

    beforeEach(function () {
        angular.mock.module('ui.router');

        angular.mock.module(homeModule);

        var mockHomeService = {
            "getLocation" : jasmine.createSpy("HomeService getLocation")
        };

        angular.mock.module(function ($provide) {
            $provide.value("HomeService", mockHomeService);
            $provide.value("$state", {});
        });

        angular.mock.inject(function($q) {
            deferred = $q.defer();

            mockHomeService.location = 'Wellcome to home page';
            mockHomeService.getLocation = function() {};

            spyOn(mockHomeService, 'getLocation').andReturn(deferred.promise);
        });

    });

    beforeEach(function () {
        angular.mock.inject(function ($controller, $rootScope) {
            sut = $controller("HomeCtrl", {
                $scope : $rootScope
            });
        });
    });

    it('should be defined', function () {
        expect(sut).toBeDefined();
    });
});