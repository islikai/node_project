/**
 * 客户端请求
 * 使用app.js作为服务端，客户端请求数据
 */

const http = require('http');

let responseData = '';

const option = {
  host: 'localhost',
  port: 3000,
};

// 客户端请求
const request = http.request(option);

request.on('response', (res) => {
  res.on('data', (chuck) => {
    responseData += chuck;
  });

  res.on('end', () => {
    // Hello Node.js
    console.log(responseData);
  });
}).end();


