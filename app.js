var phone = require('./phone');

module.exports = (function() {

  function _call() {
    phone.call('Obama');
  }

  return {
    call : _call
  }
})();