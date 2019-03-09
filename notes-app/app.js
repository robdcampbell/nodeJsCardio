const getNotes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

// Customize yargs version
yargs.version('1.1.0');

console.log(yargs.argv);