/**
 * 客户端请求
 * 使用app.js作为服务端，客户端请求数据
 */

const http = require('http');

let responseData = '';

http.request({
  host: 'localhost',
  port: 3000,
  method: 'get',
}, (res) => {
  res.on('data', (chuck) => {
    responseData += chuck;
  });

  res.on('end', () => {
    // Hello Node.js
    console.log(responseData);
  });
}).end();


