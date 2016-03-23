"use strict";

function HomeCtrl(HomeService) {

    var that = this;

    HomeService.getLocation().then(function (location) {
        return that.location = location;
    });
}

HomeCtrl.$inject = ['HomeService'];

module.exports = HomeCtrl;