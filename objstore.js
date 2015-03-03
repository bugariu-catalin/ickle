/**
 * @module objstore
 * @requires filestorage
 * @requires path
 */
"use strict";
var path = require('path');
var storage = require('./filestorage.js');

/**
 * Implements a storage facility for split objects.
 *
 * @constructor
 * @requires storage
 */
function SplitStorage(baseDirectory) {
    this.baseDirectory = baseDirectory;
}

/**
 * Stores a given object, split by properties.
 *
 * @param {Object} completeObject - An object to split into properties.
 *
 * @returns {Array} The array of property names used as filenames or 'null' if
 *                  an error occurred.
 */
SplitStorage.prototype.storeObject = function (completeObject) {
    // This function takes a single object and decomposes it into two arrays,
    // the first holding a string containing the name of each property and
    // the second holding the value of that property.
    // For example:
    //
    // { foo: { one: "one", two: 2 }, baa: { three: 3, four: "4" } }
    //
    // becomes:
    //
    // [ "foo", "baa" ] - Property array
    // [ { one: "one", two: 2}, { three: 3, four: "4" } ] - Value array
    //
    // The 'storage' module 'store' function is then utilised with each
    // name in the property array as the filename and the corresponding
    // entry in the value array in string form.
    //
    // The 'baseDirectory' class member is used to prefix the filename
    // with an appropriate storage directory.
};

/**
 * Restores a complete object, merged from split objects.
 *
 * @param {Array} filenames - An array of filenames of objects to merge.
 *
 * @returns {Object} A complete object, or 'null' if an error occurred.
 */
SplitStorage.prototype.restoreObject = function (filenames) {
    // The function takes a set of filenames to retrieve values from, eg:
    // [ "foo", "baa" ]
    //
    // It calls the 'storage' module 'restore' function with the appropriate
    // filenames.
    //
    // The return value is an object which contains a property for each
    // filename, the value of which is the value returned (converted from
    // string form) from the file with the corresponding filename.
    //
    // The 'baseDirectory' class member is used to prefix the filename
    // with an appropriate storage directory.
};

module.exports = SplitStorage;


