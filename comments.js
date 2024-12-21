// Create web server
var http = require('http');
var url = require('url');

// Create web server
http.createServer(function (req, res) {
    // Get path name from URL
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    // Route to function based on request
    route(pathname);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');

// Route to function based on request
function route(pathname) {
    console.log("About to route a request for " + pathname);
}
