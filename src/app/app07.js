const querystring = require('querystring');

// String 转 obj
const str = 'name=kk&age=20&like=apple';
const obj = querystring.parse(str);
console.log(obj);  // { name: 'kk', age: '20', like: 'apple' }


const params = {
  name: 'kkk',
  age: 20,
}

const result = querystring.stringify(params);
console.log(result); // name=kkk&age=20
