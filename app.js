var http = require('http');
var port = process.env.PORT || 4545;

var app = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.send('A minimalistic blog');
});

app.listen(port);

console.log('Spinning at http://localhost:' + port);