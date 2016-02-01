var rewire  = require('rewire');
var expect = require('chai').expect;
var client = rewire('../app');

describe('Presidential caller', function() {

  var mockedPhoneCaller;

  console.log('Client: ' + client);

  beforeEach(function (done) {
    mockedPhoneCaller = require('test/FakeCaller');
    client.__set__("phone", mockedPhoneCaller);
    done();
  });

  describe('Do the call', function () {
    it('should call Obama', function (done) {
      client.call('Obama');
      expect(mockedPhoneCaller.getLastCall()).to.contain('Obama');
      done();
    });
  });
});