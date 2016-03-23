"use strict";

var testsContext;

require('angular');
require('angular-mocks');
require('angular-ui-router');

testsContext = require.context('./app', true, /\.test\.js$/);
testsContext.keys().forEach(testsContext);