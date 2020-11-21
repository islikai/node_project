const http = require('http');

const httpServer = new http.Server();

httpServer.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Node.js');
})

httpServer.listen(3000, () => {
  console.log('Node Server started on port 3000!');
});
