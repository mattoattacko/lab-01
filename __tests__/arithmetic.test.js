'use strict';

const arithmetic = require('../lib/arithmetic.js');

// Use the faker module to randomize input
// Test each method for proper use (invoked with number arguments)
// Test each method for improper use (invoked with one or more non-number arguments)
const faker = require('faker');
const randomNumberOne = faker.random.number();
const randomNumberTwo = faker.random.number();

describe('arithmetic testing', ()=>{

  it('testing our additon', () => {
    let sum = arithmetic.add(randomNumberOne, randomNumberTwo);
    expect(sum).toEqual(randomNumberOne + randomNumberTwo);
  });

  it('testing our subtraction', () => {
    let diff = arithmetic.subtract(randomNumberOne, randomNumberTwo);
    expect(diff).toEqual(randomNumberOne - randomNumberTwo);
  });

  it('testing our multiplication', () => {
    let multisum = arithmetic.multiply(randomNumberOne, randomNumberTwo);
    expect(multisum).toBe(randomNumberOne * randomNumberTwo);
  });

  it('testing our division', () => {
    let dividesum = arithmetic.divide(randomNumberOne, randomNumberTwo);
    expect(dividesum).toBe(randomNumberOne / randomNumberTwo);
  });

  it('adding non-numbers returns null', () => {
    let sum = arithmetic.add(randomNumberOne,'string');
    expect(sum).toBeNull();
  });

  it('subtracting non-numbers returns null', () => {
    let diff = arithmetic.subtract(true,randomNumberTwo);
    expect(diff).toBeNull();
  });
});