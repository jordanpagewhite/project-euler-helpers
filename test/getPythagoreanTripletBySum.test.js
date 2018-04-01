import { assert } from 'chai'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/index'

describe('getPythagoreanTripletBySum(s)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return [3,4,5] for getPythagoreanTripletBySum(12)', function() {
    peh.getPythagoreanTripletBySum(12).should.deep.equal([3,4,5]);
  });

  it('should return [200,375,425] for getPythagoreanTripletBySum(1000)', function() {
    peh.getPythagoreanTripletBySum(1000).sort().should.deep.equal([200,375,425]);
  });
})
