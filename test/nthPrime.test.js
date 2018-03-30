import 'babel-polyfill'
import { assert } from 'assert'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/index'

describe('nthPrime(n)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return false if n is not an integer', function() {
    peh.nthPrime(1.2).should.equal(false);
  });
  it('should return false if n is a negative integer', function() {
    peh.nthPrime(-12).should.equal(false);
  });
  it('should return 2 if n is 1', function() {
    peh.nthPrime(1).should.equal(2);
  });
  it('should return 3 if n is 2', function() {
    peh.nthPrime(2).should.equal(3);
  });
  it('should return 5 if n is 3', function() {
    peh.nthPrime(3).should.equal(5);
  });
  it('should return 7919 if n is 1000', function() {
    peh.nthPrime(1000).should.equal(7919);
  });
})
