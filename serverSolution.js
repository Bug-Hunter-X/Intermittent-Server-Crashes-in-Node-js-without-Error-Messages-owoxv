const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.end('Hello, world!');
}).on('error', err => {
  console.error('Server error:', err);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});