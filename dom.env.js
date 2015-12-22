/*
 dom.env

 Mostly utils with some state management
 */
var domEnv = require('dom.env');
domEnv.assign(require('./env'));
require('./observable')(domEnv);
module.exports = domEnv;
