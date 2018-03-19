import 'babel-polyfill'
import { assert } from 'assert'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/ProjectEulerHelpers.js'

describe('isPrime(n)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return false when n is not an integer', function() {
    peh.isPrime(0.1).should.equal(false);
  });
  it('should return false when n equal 1', function() {
    peh.isPrime(1).should.equal(false);
  });
  it('should return false when n is less than 1', function() {
    peh.isPrime(-123).should.equal(false);
  });
  it('should return false when n is a composite natural number', function() {
    peh.isPrime(24).should.equal(false);
  });
  it('should return true when n is prime', function() {
    peh.isPrime(13).should.equal(true);
  });
})
