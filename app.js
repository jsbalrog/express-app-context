/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var appRouter = express.Router();
var path = require('path');

// Setup server
var app = express();
var server = require('http').createServer(app);

// Set port
app.set('port', process.env.PORT || 3000);

// Set view location and view engine
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');

// Static directory
app.use(express.static(__dirname + '/public'));

// Routing
app.use('/app-context', appRouter);
require('./server/routes')(appRouter);

// Start server
server.listen(app.get('port'), function () {
  console.log('Express server listening on %d, in %s mode', app.get('port'), app.get('env'));
});

// Expose app
exports = module.exports = app;