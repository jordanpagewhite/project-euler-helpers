'use strict';

const assert = require('assert');
const should = require('chai').should();
const helpers = require('../app/helpers.js');

describe('nthPrime(n)', function() {
  it('should return false if n is not an integer', function() {
    helpers.nthPrime(1.2).should.equal(false);
  });
  it('should return false if n is a negative integer', function() {
    helpers.nthPrime(-12).should.equal(false);
  });
  it('should return 2 if n is 1', function() {
    helpers.nthPrime(1).should.equal(2);
  });
  it('should return 3 if n is 2', function() {
    helpers.nthPrime(2).should.equal(3);
  });
  it('should return 5 if n is 3', function() {
    helpers.nthPrime(3).should.equal(5);
  });
  it('should return 7919 if n is 1000', function() {
    helpers.nthPrime(1000).should.equal(7919);
  });
})
