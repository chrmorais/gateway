/*
* Meccano IOT Gateway
*
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.

* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
*/

'use strict';

var express = require('express');

// Set the environment, location of the config file and load configuration
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.CONFIG_FILE = process.env.CONFIG_FILE ||  './config/config.yml';
var config  = require('./config');

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./express')(app);
require('./routes')(app);

// Start server
var PORT = process.env.PORT || config.port;
var HOSTNAME = process.env.HOSTNAME || config.hostname;
server.listen(PORT, HOSTNAME, function () {
  console.log('Meccano IoT Gateway listening on %d, in %s mode', config.port, app.get('env'));
});
