/**
 * Test TimeSeries object and methods.
 */

var vows = require('vows'),
    assert = require('assert');

var TimeSeries = require('../lib/gauss').TimeSeries;

var series = new TimeSeries([1315378833000, 2], [1315789015000, 4]);

vows.describe('TimeSeries').addBatch({
    'Times': {
        topic: series.times(),
        '[1315378833000, 1315789015000]': function(topic) {
            assert.deepEqual(topic, [1315378833000, 1315789015000]);
        }
    },
    'Values': {
    	topic: series.values(),
    	'[2, 4]': function(topic) {
    		assert.deepEqual(topic, [2, 4]);
    	}
    }
}).export(module);
