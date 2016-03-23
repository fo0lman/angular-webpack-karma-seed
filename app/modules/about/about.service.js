"use strict";

function AboutService($q) {
    
    this.getLocation = function () {

        return $q(function (resolve) {
            resolve("Wellcome to about page");
        });
    };
}

AboutService.$inject = ['$q'];

module.exports = AboutService;
