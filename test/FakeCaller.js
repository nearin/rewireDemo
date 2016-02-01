module.exports = (function() {

  var lastCall;

  function _call(name) {
    lastCall = name;
  }

  function getLastCall() {
    return lastCall;
  }

  return {
    call : _call,
    getLastCall : getLastCall
  }
})();