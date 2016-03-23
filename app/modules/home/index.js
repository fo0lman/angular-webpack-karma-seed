'use strict';

var routes = require("./home.routes");
var service = require("./home.service");
var ctrl = require("./home.ctrl");

var homeModule = angular.module("HomeModule", [])
    .config(routes)
    .service("HomeService", service)
    .controller("HomeCtrl", ctrl)
    .name;

module.exports = homeModule;