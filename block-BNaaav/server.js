var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method == 'GET' && req.url == '/')
    res.setHeader('Content-Type', 'text/html');
  fs.readFile('./index.html', (err, content) => {
    if (err) return console.log(err);
    res.end(content);
  });
  if (req.method == 'GET' && req.url == '/about')
    res.setHeader('Content-Type', 'text/html');
  fs.readFile('./about.html', (err, content) => {
    if (err) return console.log(err);
    res.end(content);
  });
  if (req.method == 'GET' && req.url == '/blog')
    res.setHeader('Content-Type', 'text/html');
  fs.readFile('./blog.html', (err, content) => {
    if (err) return console.log(err);
    res.end(content);
  });
  if (req.method == 'GET' && req.url == '/contact')
    res.setHeader('Content-Type', 'text/html');
  fs.readFile('./contact.html', (err, content) => {
    if (err) return console.log(err);
    res.end(content);
  });
  if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFile('assets/stylesheet/style.css', (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  if (
    req.url.split('.').pop() === 'jpg' ||
    req.url.split('.').pop() === 'png' ||
    req.url.split('.').pop() === 'jpeg'
  ) {
    res.setHeader('Content-Type', 'image/png');
    fs.readFile('./' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(3000, () => {
  console.log('server is listening to port 3000');
});
