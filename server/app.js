/**
 * Main application file
 */
'use strict';

var express = require('express');
var config = require('./config/index');
var app = express();

// Expose app
exports = module.exports = app;

// expose the function to start the server instance
app.startServer = startServer;

// Setup Express
require('./config/express')(app);

// Setup Routes
require('./routes')(app);

/**
 * Create an express http server and return it
 * Config the socketio service to use this server
 * @api private
 * @return
 */
function startServer() {
    var server = require('http').createServer(app);
    return server;
}
