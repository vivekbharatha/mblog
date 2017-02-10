var http = require('http');
var port = process.env.PORT || 4545;

var BlogRoute = require('route/blogRoute');
var message = require('message/message');
var app = http.createServer(function (req, res) {
    
    var blogRoute = new BlogRoute({ message: message, req: req, res: res });
    if (blogRoute.isValidRoute()) {
        blogRoute.route();
        return;
    }
    
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.send('A minimalistic blog');
});

app.listen(port);

console.log('Spinning at http://localhost:' + port);