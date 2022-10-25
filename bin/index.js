#! /usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));

const { recordFiles, openBrowser } = require('../src/index.js');

recordFiles(argv.path || 'src/assets/');
openBrowser();
