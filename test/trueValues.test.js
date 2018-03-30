import { assert } from 'chai'
import 'chai/register-should'
import ProjectEulerHelpers from '../app/index'

describe('trueValues(arr)', function() {
  const peh = new ProjectEulerHelpers()

  it('should return 3 for [true, true, true, false, false, false]', function() {
    peh.trueValues([true,true,true,false,false,false]).should.equal(3);
  });
  it('should return 1 for [false, false, true, false, false, false]', function() {
    peh.trueValues([false,false,true,false,false,false]).should.equal(1);
  });
  it('should return 0 for [false, false, false, false, false, false]', function() {
    peh.trueValues([false,false,false,false,false,false]).should.equal(0);
  });
  it('should return 0 for []', function() {
    peh.trueValues([]).should.equal(0);
  });
})
