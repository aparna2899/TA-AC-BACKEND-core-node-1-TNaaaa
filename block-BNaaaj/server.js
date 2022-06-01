var urlString = `https://airindia.com/fares/calculate?from=delhi&to=detroit`;
var url = require('url');

var parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);
console.log('query string: ', parsedUrl.query);
console.log('path name: ', parsedUrl.pathname);
console.log('protocol:', parsedUrl.protocol);
