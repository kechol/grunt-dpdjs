'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.dpdjs = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  task: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/dpd.js');
    var expected = grunt.file.read('node_modules/deployd/clib/dpd.js');
    test.ok(actual.indexOf(expected) !== -1, 'should includes base dpd.js');

    expected = grunt.file.read('test/expected/collections.js');
    test.ok(actual.indexOf(expected) !== -1, 'should includes auto generated methods');

    test.done();
  }
};
