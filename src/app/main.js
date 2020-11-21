// node内置原生模块
const http = require('http');

// 创建服务
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello node.js');
});

// 监听端口
server.listen(3000, 'localhost');

// 服务器正常启动并且处理监听模式下会调用
server.on('listening', () => {
  console.log('Server is listening');
  // 关闭服务器
  // server.close();
});

// 客户端与服务器以建立好连接回调会触发
server.on('connection', () => {
  console.log('Client is connected');
});

// 服务器关闭回调
server.on('close', () => {
  console.log('Server is closed');
})

console.log('Node Server started on port 3000');
