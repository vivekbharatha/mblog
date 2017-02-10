var BlogRoute = function BlogRoute (context) {
  this.req = context.req;
  this.res = context.res;
  this.message = context.message;
};

BlogRoute.prototype.isValidRoute = function isValidRoute () {
    return this.req.method = 'GET' && this.req.url.indexOf('/blog/') >= 0;
};

BlogRoute.prototype.route = function route() {
    var url = this.req.url;
    var index = url.indexOf('/blog/') + 1;
    var path = url.slice(index) + '.md';
    this.message.readTextFile(path, function fluffy(err, raw) {
        if (err) {
           this.res.writeHead(500);
           return this.res.end(err);
        }
        
        this.res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        this.res.end(raw);
    });
};