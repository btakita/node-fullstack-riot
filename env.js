var riot = require('riot')
  , observable = riot.observable
  , env = {
      riot: riot,
      observable: observable,
      Cell: require('cell2').assign({observable: observable}),
      stores: require('riotcontrol'),
      tagInit: require('./tag/tagInit'),
      tags: {}
    };
module.exports = env;
