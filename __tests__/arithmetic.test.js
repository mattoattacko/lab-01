'use strict';

const arithmetic = require('../lib/arithmetic.js');

// Use the faker module to randomize input
// Test each method for proper use (invoked with number arguments)
// Test each method for improper use (invoked with one or more non-number arguments)

describe('arithmetic testing', ()=>{

  it('testing our additon', () => {
    let testAddition = arithmetic.add(2,4);
    expect(testAddition).toBe(6);
  });

  it('testing our subtraction', () => {
    let testSubtraction = arithmetic.subtract(2,4);
    expect(testSubtraction).toBe(-2);
  });

  it('testing our multiplication', () => {
    let testMultiplication = arithmetic.multiply(2,4);
    expect(testMultiplication).toBe(8);
  });

  it('testing our multiplication v2', () => {
    let multiplyNumbers = [2,4,6];
    let testMultiplication = arithmetic.multiply(...multiplyNumbers); //string this?
    expect(testMultiplication).toBe(48);
  });

  it('testing our division', () => {
    let testDivide = arithmetic.divide(2,4);
    expect(testDivide).toBe(0.5);
  });

  it('testing our division v2', () => {
    let divideNumbers = [6,4,2];
    let testDivide = arithmetic.divide(...divideNumbers);
    expect(testDivide).toBe(0.75);
  });
});

