const names = require('./1-names');
const sayHi = require('./2-utilities');
const data = require('./3-alternative-flavours');

console.log(data['items'][0]);
console.log(sayHi(names.joe));
console.log(sayHi(names.peter));
