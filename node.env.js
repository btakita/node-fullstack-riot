/*
 dom.env

 Mostly utils with some state management
 */
var nodeEnv = require('node-fullstack/node.env');
nodeEnv.assign(require('./env'));
require('./observable')(nodeEnv);
module.exports = nodeEnv;
