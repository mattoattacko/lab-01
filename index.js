'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');

console.log(greet('JOHN'));
console.log(math.add(2,4)); //6
console.log(math.subtract(2,4)); //-2
console.log(math.multiply(2,4)); //8
console.log(math.divide(4,2)); //2
console.log(math.divide(0,2)); //0
console.log(math.divide(2,0)); //null