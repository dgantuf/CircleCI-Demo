// Import the functions sum and subtract by requiring the other file
// This will not work if you don't export the functions form the myFunction.js file
const {sum, subtract} = require('./myFunction.js')

// Jest includes a test() function which takes in a string for the name of the function and a callback function to execute
// A callback function is one that you pass into a function as a parameter which will call it once it runs
// Think of it as calling test is an event, and this event will trigger the callback function to run
// In this case our functions are known as anonymous which just means that they're not named and are defined within the parameter space itself
// () => {...} is usually the formatting for anonymous functions using the ES6 syntax
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 1)).toBe(3);
  });

test('subtract 1 from 2 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
});

/* Maybe a simpler way to look at this
var nameOfTest = 'Add 1+2 to equal 3';
function testSum(a, b, c){
  expect(sum(a,b)).toBe(c);
}

test(nameOfTest, testSum(1,2,3));
*/