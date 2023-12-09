const http = require('node:http');
const fs = require('node:fs');

// 1. create server
const server = http.createServer((req, resp) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/home') {
    resp.writeHead(200, {
      'Content-Type': 'text/html',
    });
    fs.readFile('./views/home.html', 'utf-8', (err, data) => {
      resp.end(data);
    });
  }
});

// 2. listen port
server.listen(3000, () => {
  console.log('http://localhost:3000');
});
