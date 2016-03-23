"use strict";

describe('About Controller', function () {

    var aboutModule = require("./index.js");
    var sut, deferred;

    beforeEach(function () {
        angular.mock.module('ui.router');

        angular.mock.module(aboutModule);

        var mockAboutService = {
            "getLocation" : jasmine.createSpy("AboutService getLocation")
        };

        angular.mock.module(function ($provide) {
            $provide.value("AboutService", mockAboutService);
            $provide.value("$state", {});
        });

        angular.mock.inject(function($q) {
            deferred = $q.defer();

            mockAboutService.location = 'Wellcome to about page';
            mockAboutService.getLocation = function() {};

            spyOn(mockAboutService, 'getLocation').andReturn(deferred.promise);
        });

    });

    beforeEach(function () {
        angular.mock.inject(function ($controller, $rootScope) {
            sut = $controller("AboutCtrl", {
                $scope : $rootScope
            });
        });
    });

    it('should be defined', function () {
        expect(sut).toBeDefined();
    });
});