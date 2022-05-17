var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log('url: ', req.url);
  console.log('method: ', req.method);
  console.log('header: ', req.headers);
  res.end('welcome');
}

server.listen(3000, () => {
  console.log('server listening on port 3000');
});
