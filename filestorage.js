var fs = require('fs');

module.exports = function () {

function store(filename, data) {
    fs.writeFileSync(filename, data);
}

function restore(filename) {
    return fs.readFileSync(filename);
}

return function (method) {
    if (method == 1) {
        return store;
    } else if (method == 2) {
        return restore;
    }
}

};
