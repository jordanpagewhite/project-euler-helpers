import { assert } from 'chai'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/index'

describe('maxProductSubset(digits, subsetSize)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return 1512 for maxProductSubset("1978365321115", 4)', function() {
    peh.maxProductSubset("1978365321115", 4).should.equal(1512);
  });
})
