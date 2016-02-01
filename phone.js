module.exports = (function() {

  function _call(name) {
    console.log('Calling: ' + name);
  }

  return {
    call : _call
  }
})();