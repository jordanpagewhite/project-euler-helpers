const assert = require('assert');
const should = require('chai').should();
const peh = require('../app/ProjectEulerHelpers.js');

describe('lcm(arr)', function() {
  it('should return false when any value in arr is not an integer', function() {
    peh.lcm([0.1,2]).should.equal(false);
  });
  it('should return false when any integer in arr is not a natural number', function() {
    peh.lcm([0,2,3,4,5,6]).should.equal(false);
  });
  it('should return 60 for lcm([12,30])', function() {
    peh.lcm([12,30]).should.equal(60);
  });
})
