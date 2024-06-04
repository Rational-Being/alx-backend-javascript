const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', '23');

  res.writeHead(200);

  res.end('Hello Holberton School!');
});

module.exports = app;

app.listen(1245, '127.0.0.1', () => {});
module.exports = app;
