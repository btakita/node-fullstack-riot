if (typeof riot === 'undefined') {
  var riot = require('riot');
}
module.exports = observable;
function observable(obj) {
  return riot.observable(obj);
}