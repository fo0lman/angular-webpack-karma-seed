"use strict";

function HomeService ($q) {

    this.getLocation = function () {

        return $q(function (resolve) {
            resolve("Wellcome to home page");
        });
    };
}

HomeService.$inject = ['$q'];

module.exports = HomeService;
