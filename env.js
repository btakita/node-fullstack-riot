var riot = require('riot');
var env = {
  riot: riot,
  observable: riot.observable,
  cell: require('riot-cell'),
  stores: require('riotcontrol'),
  tagInit: require('./tag/tagInit'),
  tags: {}
};
module.exports = env;
