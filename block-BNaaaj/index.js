var os = require('os');
var fs = require('fs');

console.log('Welcome to Nodejs');

var cpus = os.cpus().length;
var freeMemory = os.freemem();
var uptime = os.uptime();
var version = os.version();

console.log(cpus, freeMemory, uptime, version);

fs.readFile('./app.js', (err, content) => {
  console.log(err, content.toString());
});
