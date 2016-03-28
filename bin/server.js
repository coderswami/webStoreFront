#!/usr/bin/env node
'use strict';

var app = require('../server/app');

// start sockets for this instance and start server
app.startServer().listen(app.get('port'), app.get('ip'), function serverStarted() {
    console.log('Online Store frontend server started on ip %s on port %d', app.get('ip'), app.get('port'));
});

// expose app
exports = module.exports = app;
