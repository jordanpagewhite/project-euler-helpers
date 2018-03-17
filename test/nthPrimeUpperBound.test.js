const chai = require('chai')
const should = require('chai').should()
const expect = require('chai').expect
const assert = chai.assert
const peh = require('../app/ProjectEulerHelpers.js');

describe('nthPrimeUpperBound(n)', function() {
  it('should return false if n is not an integer', function() {
    peh.nthPrimeUpperBound(1.2).should.equal(false);
  });
  it('should return false if n is a negative integer', function() {
    peh.nthPrimeUpperBound(-12).should.equal(false);
  });
  it('should return greater than 2 if n is 1', function() {
    assert.isAtLeast(peh.nthPrimeUpperBound(1),2);
  });
  it('should return greater than 3 if n is 2', function() {
    assert.isAtLeast(peh.nthPrimeUpperBound(2),3);
  });
  it('should return greater than 5 if n is 3', function() {
    assert.isAtLeast(peh.nthPrimeUpperBound(3),5);
  });
  it('should return greater than 7919 if n is 1000', function() {
    assert.isAtLeast(peh.nthPrimeUpperBound(1000),7919);
  });
  it('should return greater than 15485863 if n is 10000000', function() {
    assert.isAtLeast(peh.nthPrimeUpperBound(1000000),15485863);
  });
})
