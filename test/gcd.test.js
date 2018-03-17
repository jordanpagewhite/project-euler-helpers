const assert = require('assert');
const should = require('chai').should();
const helpers = require('../app/helpers.js');

describe('gcd(arr)', function() {
  it('should return false when a value in arr is not an integer', function() {
    helpers.gcd([0.1,2]).should.equal(false);
  });
  it('should return 16 when gcd([64, 6482064])', function() {
    helpers.gcd([64,6482064]).should.equal(16);
  });
  it('should return 1 when gcd([64, 13])', function() {
    helpers.gcd([64,13]).should.equal(1);
  });
  it('should return 64 when gcd([64, 1024, 2048])', function() {
    helpers.gcd([64,1024,2048]).should.equal(64);
  });
  it('should return 64 when gcd([-64,-1024])', function() {
    helpers.gcd([-64,-1024]).should.equal(64);
  });
  it('should return 64 when gcd([-64,1024])', function() {
    helpers.gcd([-64,1024]).should.equal(64);
  });
  it('should return 64 when gcd([64,-1024])', function() {
    helpers.gcd([64,-1024]).should.equal(64);
  });
  it('should return 64 when gcd([64,1024])', function() {
    helpers.gcd([64,1024]).should.equal(64);
  });
})
