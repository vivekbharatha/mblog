var messageMock = function messageMock () {
  this.readTextFileCalledWithPath = '';
  this.hasCallback = false;
};

messageMock.prototype.readTextFile = function readTextFile (path, callback) {
    this.readTextFileCalledWithPath = path;
    
    if (typeof callback === 'function') {
        this.hasCallback = true;
    }
};

module.exports = messageMock;