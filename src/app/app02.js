const http = require('http');

// 创建服务
const server = http.createServer((req, res) => {
  // 处理客户端数据
  let data = '';
  req.on('data', (chuck) => {
    data += chuck;
  });
  req.on('end', () => {
    let method = req.method;
    let headers = JSON.stringify(req.headers);
    let version = req.httpVersion;
    let url = req.url;

    res.writeHead(200, { 'Content-type': 'text/html' });

    const reqponseData = `
      【method】:::: ${method}
      <br/>
      【headers】::: ${headers}
      <br/>
      【version】::: ${version}
      <br/>
      【url】::: ${url}
      <br/>
      【data】::: ${data}
    `;
  
    // 返回数据
    res.end(reqponseData);
  });
});

// 监听端口
server.listen(3000, 'localhost');

console.log('Node Server started on port 3000');
