const assert = require('assert');
const should = require('chai').should();
const peh = require('../app/ProjectEulerHelpers.js');

describe('trueValues(arr)', function() {
  it('should return 3 for [true, true, true, false, false, false]', function() {
    helpers.trueValues([true,true,true,false,false,false]).should.equal(3);
  });
  it('should return 1 for [false, false, true, false, false, false]', function() {
    helpers.trueValues([false,false,true,false,false,false]).should.equal(1);
  });
  it('should return 0 for [false, false, false, false, false, false]', function() {
    helpers.trueValues([false,false,false,false,false,false]).should.equal(0);
  });
  it('should return 0 for []', function() {
    helpers.trueValues([]).should.equal(0);
  });
})
