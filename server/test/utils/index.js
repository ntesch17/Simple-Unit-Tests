const config = require('../test_config.js');
const utils = require('../../src/utils');
//
const { limits } = config;
//

describe('utils', () => {
  describe('add', () => {
    it('should return addition of two numbers', (done) => {
      const sum = utils.add(10, 5);
      sum.should.equal(15);

      done();
    });
    it('should clamp number to minimum', (done) => {
      const sum = utils.add(limits.MIN - 50, 1);
      sum.should.equal(limits.MIN);
      done();
    });

    it('should clamp number to maximum', (done) => {
      const sum = utils.add(limits.MAX, 1);
      sum.should.equal(limits.MAX);
      done();
    });
  });

  describe('subtract', () => {
    it('should return subtraction of two numbers', (done) => {
      const diff = utils.sub(10, 5);
      diff.should.equal(5);
      done();
    });
    it('should clamp number to minimum', (done) => {
      const diff = utils.sub(limits.MIN, 1);
      diff.should.equal(limits.MIN);
      done();
    });

    it('should clamp number to maximum', (done) => {
      const diff = utils.sub(limits.MAX + 10, 1);
      diff.should.equal(limits.MAX);
      done();
    });
  });
});
