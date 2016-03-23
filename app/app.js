require('bootstrap/dist/css/bootstrap.css');
require('./assets/scss/app.scss');

window.jQuery = require('jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.js');

require('angular');
require("angular-ui-router");

var router = require("./app.routes");

var homeModule = require("./modules/home/index");
var aboutModule = require("./modules/about/index");

var App = angular.module('App', ['ui.router', homeModule, aboutModule])
    .config(router);


