var noop = require('./')
var assert = require('assert')

// Should be of type function
assert.equal(typeof noop, 'function')