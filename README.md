![CF](http://i.imgur.com/7v5ASc8.png) 01: Node Ecosystem
========================================================


### Arithmetic Module

#### Write Arithmetic Module Tests
* Use the faker module to randomize input
* Test each method for proper use (invoked with number arguments)
* Test each method for improper use (invoked with one or more non-number arguments)

#### Add features to the arithmetic module
* Add support for multiply and divide (be careful to not divide by zero!)
* Refactor the add, subtract, multiply to allow for an array of params so that you can do deeper calculations

I used basic arithmetic modules/methods to do the mathmatics in each of the functions or checks. Each has an arity of two. Valid inputs will return valid numbers (hopfully...). Null will be returned if the input is determined to be invalid. You can see the actual code to see what numbers I used/expected to be returned. 

---

### Greet Module
Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

#### Greet Module Tests
* Use the faker module to randomize input
* Write a test that expects the greet module to return `null` when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
* This should happen when invoked with `'world'` as the first argument

The Greet Module function has an arity of one and expects a string to be input. Following with the required greet module requirements, the function returns the input name and concatenates with "hello". The greet function returns null if the user inputs anything that's not a string. 

### Documentation
In your README.md file, describe the exported values of each module defined in your `lib` directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.
