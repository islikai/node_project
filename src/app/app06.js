const url = require('url');

const urlStr = 'http://www.out.com?id=123';
const urlObj = url.parse(urlStr);
console.log(urlObj);

/**
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.out.com',
  port: null,
  hostname: 'www.out.com',
  hash: null,
  search: '?id=123',
  query: 'id=123',
  pathname: '/',
  path: '/?id=123',
  href: 'http://www.out.com/?id=123'
 */

/**
 * 组装URL
 */

const obj = {
  host: 'www.out.com',
  port: 80,
  protocol: 'http:',
  search: '?id=abc',
  query: 'id=abc',
  path: '/',
}
const realAddress = url.format(obj);
console.log(realAddress); // http://www.out.com?id=abc


const getUrl = url.resolve('http://www.out.com', 'id');
console.log(getUrl); // http://www.out.com/id