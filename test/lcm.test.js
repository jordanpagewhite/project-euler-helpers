const assert = require('assert');
const should = require('chai').should();
const helpers = require('../app/helpers.js');

describe('lcm(arr)', function() {
  it('should return false when any value in arr is not an integer', function() {
    helpers.lcm([0.1,2]).should.equal(false);
  });
  it('should return false when any integer in arr is not a natural number', function() {
    helpers.lcm([0,2,3,4,5,6]).should.equal(false);
  });
  it('should return 60 for lcm([12,30])', function() {
    helpers.lcm([12,30]).should.equal(60);
  });
})
