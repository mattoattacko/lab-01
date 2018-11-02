'use strict';

// let greet = module.exports = {}; Use if no better ways come up

// The greet function should have a single parameter (arity of one) that should expect a string as it's input
// The greet function should return the input name, concatenated with "hello ": eg. ("hello susan")
// The greet function should return null if the input is not a string

module.exports = exports = (name) => { // should we convert to ES6 
  if (typeof name === 'string') {return `hello ${name}`;}
  else {return null;}
};