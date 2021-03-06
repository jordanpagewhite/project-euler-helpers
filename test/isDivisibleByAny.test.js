import 'babel-polyfill'
import { assert } from 'assert'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/index'

describe('isDivisibleByAny(x, arr)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return false when x is not an integer', function() {
    peh.isDivisibleByAny(0.1, [2,3,4,5]).should.equal(false);
  });
  it('should return false when the values in arr are not integers', function() {
    peh.isDivisibleByAny(10, [0.1,2,5]).should.equal(false);
  });
  it('should return false when x is not divisible by any integer in arr', function() {
    peh.isDivisibleByAny(64, [3,5,6,7,9,11,13,17,19]).should.equal(false);
  });
  it('should return true when x is divisible by some integer in arr', function() {
    peh.isDivisibleByAny(64, [3,5,6,7,8,9,11,13,17,19]).should.equal(true);
  });
})
