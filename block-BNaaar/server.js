var http = require('http');
var url = require('url');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  if (req.method == 'GET' && pathname == '/') {
    res.end('Welcome to homepage');
  }
  if (req.method == 'GET' && pathname == '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>this is all about NodeJS</h2>');
  }
  if (req.method == 'POST' && pathname == '/about') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'this is a post request' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>Page Not Found</h2>');
  }
}

server.listen(4000, () => {
  console.log('Server is listeing on port 4000');
});
