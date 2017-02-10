var fs = require('fs');
var path = require('path');

function readTextFile (realtivePath, v) {
    var fullPath = path.join(__dirname, '../') + realtivePath;
    fs.readFile(fullPath, v);
}

module.exports = readTextFile;