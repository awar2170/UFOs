// Python
// # Takes two numbers and adds them
// def addition(a, b):
//     return a + b

// Takes two numbers and adds them
// function addition(a, b) {
//     return a + b;
// }

// // Functions can call other functions
// function doubleAddition(c, d) {
//     var total = addition(c, d) * 2;
//     return total;
// }

// console.log(doubleAddition(65,34))

// // Fat Arrow Function 
// function square(num){
//     return num **2;
// }

// // Below is an annon function 
// let square = function(num) {
//     return num **2
// }

// // Made the above annon funciton into a fat arrow function 
// let square = (num) => num**2;

// // Simple JavaScript log statement
// function printHello() {
//     return "Hello there!";
// }

// printHello = () => "Hello there!";

// // Converted to an arrow function
// // This is the addition function at the top of the code converted into an arrow funciton
addition = (a, b) => a + b;

// Converting the doubleAddition function to an arrow function 
doubleAddition = (c, d) => addition(c,d)*2; 
console.log(doubleAddition(33,25))