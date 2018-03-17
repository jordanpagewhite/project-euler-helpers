const assert = require('assert');
const should = require('chai').should();
const helpers = require('../app/helpers.js');

describe('isPrime(n)', function() {
  it('should return false when n is not an integer', function() {
    helpers.isPrime(0.1).should.equal(false);
  });
  it('should return false when n equal 1', function() {
    helpers.isPrime(1).should.equal(false);
  });
  it('should return false when n is less than 1', function() {
    helpers.isPrime(-123).should.equal(false);
  });
  it('should return false when n is a composite natural number', function() {
    helpers.isPrime(24).should.equal(false);
  });
  it('should return true when n is prime', function() {
    helpers.isPrime(13).should.equal(true);
  });
})
