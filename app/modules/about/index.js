'use strict';

var routes = require("./about.routes.js");
var service = require("./about.service.js");
var ctrl = require("./about.ctrl.js");

var AboutModule = angular.module("AboutModule", [])
    .config(routes)
    .service("AboutService", service)
    .controller("AboutCtrl", ctrl)
    .name;

module.exports = AboutModule;