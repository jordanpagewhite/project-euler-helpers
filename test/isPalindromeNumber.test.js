import 'babel-polyfill'
import { assert } from 'assert'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/ProjectEulerHelpers.js'

describe('isPalindromeNumber(n)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return false when n is a negative integer', function() {
    peh.isPalindromeNumber(-131).should.equal(false);
  });
  it('should return false when the n is a positive, non-integer value', function() {
    peh.isPalindromeNumber(534.876).should.equal(false);
  });
  it('should return true for 123454321', function() {
    peh.isPalindromeNumber(123454321).should.equal(true);
  });
  it('should return false for 12345', function() {
    peh.isPalindromeNumber(12345).should.equal(false);
  });
})
