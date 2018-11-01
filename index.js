'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
var faker = require('faker');
var randomNumberFirst = faker.random.number();
var randomNumberSecond = faker.random.number();
var randomNameFirst = faker.name.findName();

console.log(greet('JOHN'));
console.log(math.add(1,3)); // 4
console.log(math.subtract(1,3)); // -2


console.log(greet(randomNameFirst));
console.log(math.add(randomNumberFirst, randomNumberSecond));
console.log(math.subtract(randomNumberFirst, randomNumberSecond));
console.log(math.multiply(randomNumberFirst, randomNumberSecond));
console.log(math.divide(randomNumberFirst, randomNumberSecond));
console.log(greet.hello(randomNameFirst));