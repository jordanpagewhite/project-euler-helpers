import { assert } from 'chai'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/index'

describe('productOfSubset(arr, index, subsetSize)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return 1512 for productOfSubset([1,9,7,8,3,6,5,3,2,1,1,1,5], 1, 4)', function() {
    peh.productOfSubset([1,9,7,8,3,6,5,3,2,1,1,1,5], 1, 4).should.equal(1512);
  });
})
