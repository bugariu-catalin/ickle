/**
 * Unit test for objstore.js
 *
 * Example:
 * nodeunit test.js
 * nodeunit --reporter nested test.js
 *
 */
var SplitStorage =  require('./objstore.js');
var Storage = new SplitStorage('./data');
var fs = require('fs');

module.exports = {
    setUp: function (callback) {
        this.data = { foo: { one: "one", two: 2 }, baa: { three: 3, four: "4" } };
        this.dataKeys = [ "foo", "baa"];
		
		if (!fs.existsSync('./data')){
			fs.mkdirSync('./data');
		}

        callback();
    },
    tearDown: function (callback) {
        // clean up
        callback();
    },
	//Test Storage.storeObject
	//The order of the returned filenames may have random order
    test1: function (test) {
		var expectedKeys = this.dataKeys;
        Storage.storeObject(this.data ,function(keys){
			test.equals(keys.length, expectedKeys.length);
			var missing = false
			for (k in expectedKeys) {
				if (keys.indexOf(expectedKeys[k]) == -1) {
					missing = true;
					break;
				}
			}
			test.notEqual(missing, true);
			test.done();
		});
    },
	//Test Storage.storeObject and restoreObject
    test2: function (test) {
		var expectedKeys = this.data;
        Storage.storeObject(this.data ,function(keys){
			Storage.restoreObject(keys, function(obj){
				for (k in expectedKeys) {
					test.deepEqual(obj[k],expectedKeys[k]);
				}
				test.done();
			});
		});
    }
};
