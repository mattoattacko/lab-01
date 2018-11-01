'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
var faker = require('faker');
var randomNumberFirst = faker.random.number();
var randomNumberSecond = faker.random.number();
var randomName = faker.name.findName();

console.log(greet('JOHN'));
console.log(math.add(1,3)); // 4
console.log(math.subtract(1,3)); // -2
