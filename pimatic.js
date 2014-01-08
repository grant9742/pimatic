#!/usr/bin/env node
var startStopDaemon = require('start-stop-daemon');
var path = require('path');

logFile = path.resolve(__dirname, '../../pimatic-daemon.log');
var options = {
  logFile: logFile,
  outFile: logFile,
  errFile: logFile,
  cwd: __dirname,
  env: { 'PIMATIC_DAEMONIZED': true },
  max: 30 //the script will run 30 times at most
};

startStopDaemon(options, function() {
  require('coffee-script');
  require('./startup');
});