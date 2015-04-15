var fs = require('fs');

function Storage() {
}

Storage.prototype.store = function(filename, data, callback) {
	fs.writeFile(filename, data, callback)
}

Storage.prototype.restore= function(filename, callback) {
    return fs.readFile(filename, callback);
}

module.exports = new Storage;
