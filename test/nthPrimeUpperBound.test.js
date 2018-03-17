'use strict';

const chai = require('chai')
const should = require('chai').should()
const expect = require('chai').expect
const helpers = require('../app/helpers.js')
const assert = chai.assert

describe('nthPrimeUpperBound(n)', function() {
  it('should return false if n is not an integer', function() {
    helpers.nthPrimeUpperBound(1.2).should.equal(false);
  });
  it('should return false if n is a negative integer', function() {
    helpers.nthPrimeUpperBound(-12).should.equal(false);
  });
  it('should return greater than 2 if n is 1', function() {
    assert.isAtLeast(helpers.nthPrimeUpperBound(1),2);
  });
  it('should return greater than 3 if n is 2', function() {
    assert.isAtLeast(helpers.nthPrimeUpperBound(2),3);
  });
  it('should return greater than 5 if n is 3', function() {
    assert.isAtLeast(helpers.nthPrimeUpperBound(3),5);
  });
  it('should return greater than 7919 if n is 1000', function() {
    assert.isAtLeast(helpers.nthPrimeUpperBound(1000),7919);
  });
  it('should return greater than 15485863 if n is 10000000', function() {
    assert.isAtLeast(helpers.nthPrimeUpperBound(1000000),15485863);
  });
})
