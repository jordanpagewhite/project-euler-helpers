import 'babel-polyfill'
import { expect } from 'chai'
import { assert } from 'chai'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/ProjectEulerHelpers.js'

describe('nthPrimeUpperBound(n)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return false if n is not an integer', function() {
    peh.nthPrimeUpperBound(1.2).should.equal(false);
  });
  it('should return false if n is a negative integer', function() {
    peh.nthPrimeUpperBound(-12).should.equal(false);
  });
  it('should return greater than 2 if n is 1', function() {
    peh.nthPrimeUpperBound(1).should.equal(false);
  });
  it('should return greater than 3 if n is 2', function() {
    peh.nthPrimeUpperBound(2).should.equal(false);
  });
  it('should return greater than 5 if n is 3', function() {
    peh.nthPrimeUpperBound(3).should.equal(false);
  });
  it('should return greater than 7 if n is 4', function() {
    peh.nthPrimeUpperBound(4).should.equal(false);
  });
  it('should return greater than 11 if n is 5', function() {
    peh.nthPrimeUpperBound(5).should.equal(false);
  });
  it('should return greater than 13 if n is 6', function() {
    assert.isAtLeast(peh.nthPrimeUpperBound(6),13);
  });
  it('should return greater than 7919 if n is 1000', function() {
    assert.isAtLeast(peh.nthPrimeUpperBound(1000),7919);
  });
  it('should return greater than 15485863 if n is 10000000', function() {
    assert.isAtLeast(peh.nthPrimeUpperBound(1000000),15485863);
  });
})
