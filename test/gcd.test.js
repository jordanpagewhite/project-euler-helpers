import 'babel-polyfill'
import { assert } from 'assert'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/index'

describe('gcd(arr)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return false when a value in arr is not an integer', function() {
    peh.gcd([0.1,2]).should.equal(false);
  });
  it('should return 16 when gcd([64, 6482064])', function() {
    peh.gcd([64,6482064]).should.equal(16);
  });
  it('should return 1 when gcd([64, 13])', function() {
    peh.gcd([64,13]).should.equal(1);
  });
  it('should return 64 when gcd([64, 1024, 2048])', function() {
    peh.gcd([64,1024,2048]).should.equal(64);
  });
  it('should return 64 when gcd([-64,-1024])', function() {
    peh.gcd([-64,-1024]).should.equal(64);
  });
  it('should return 64 when gcd([-64,1024])', function() {
    peh.gcd([-64,1024]).should.equal(64);
  });
  it('should return 64 when gcd([64,-1024])', function() {
    peh.gcd([64,-1024]).should.equal(64);
  });
  it('should return 64 when gcd([64,1024])', function() {
    peh.gcd([64,1024]).should.equal(64);
  });
})
