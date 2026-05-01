const input = require('readline-sync');

let word = "puppies";
let indexNumber = input.questionInt("Enter a number between 0-6: ");

console.log("The character for " + indexNumber + " is " + word[indexNumber]);