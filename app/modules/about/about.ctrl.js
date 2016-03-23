"use strict";

function AboutCtrl(AboutService) {

    var that = this;

    AboutService.getLocation().then(function (location) {
        return that.location = location;
    });
}

AboutCtrl.$inject = ['AboutService'];

module.exports = AboutCtrl;

