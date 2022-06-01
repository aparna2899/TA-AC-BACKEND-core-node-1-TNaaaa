const fs = require('fs');

fs.readFile('./content.md', (err, data) => {
  if (err) throw err;
  setTimeout(() => console.log(`1 ${data.toString()}`), 4000);
});

fs.readFile('./content.md', (err, data) => {
  if (err) throw err;
  console.log(`2 ${data.toString()}`);
});

let buff1 = Buffer.alloc(10);
console.log(buff1); // <Buffer 57 65 6c 63 6f 6d 65 20 74 6f>
buff1.write('Welcome to Buffer');
console.log(buff1.toString()); // Welcome to
