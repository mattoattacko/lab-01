'use strict';
const greet = require('../lib/greet.js').default.default.default.default;
const faker = require('faker');

describe('Greet Tests', () => {

  it('!=strings, return null', () => {
    let greeting = greet(100);
    expect(greeting).toBeNull();
  });

  it('input string, returns string', () => {
    let randomString = faker.random.word();
    let greeting = greet(randomString);
    expect(typeof greeting).toEqual('string');
  });
  
  it('gives `hello world` when given input `world`', () => {
    let greeting = greet('world');
    expect(greeting).toEqual('hello world');
  });

});