const assert = require('assert');
const should = require('chai').should();
const helpers = require('../app/helpers.js');

describe('isDivisibleByAny(x, arr)', function() {
  it('should return false when x is not an integer', function() {
    helpers.isDivisibleByAny(0.1, [2,3,4,5]).should.equal(false);
  });
  it('should return false when the values in arr are not integers', function() {
    helpers.isDivisibleByAny(10, [0.1,2,5]).should.equal(false);
  });
  it('should return false when x is not divisible by any integer in arr', function() {
    helpers.isDivisibleByAny(64, [3,5,6,7,9,11,13,17,19]).should.equal(false);
  });
  it('should return true when x is divisible by some integer in arr', function() {
    helpers.isDivisibleByAny(64, [3,5,6,7,8,9,11,13,17,19]).should.equal(true);
  });
})
