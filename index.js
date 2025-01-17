"use strict";

function calculateTemp(c) {
  let f = (c * 9) / 5 + 32;

  alert(c + " degrees in C Converted to F is " + f);
}
let userInput = prompt("What is the temp in C?");

calculateTemp(userInput); // The first time I did this exercise I put calculateTem instead of calculateTemp (missing the p) so my code broke. So I pulled up my web console and inspected and it told me exactly where my mistake was.

function determineAgeGroup(age) {
  if (age < 18) {
    alert("Minor!");
  } else if (age > 18 && age < 55) {
    alert("Adult!");
  } else if (age >= 55) {
    alert("Senior!");
  } else {
    alert("Invalid Input!");
  }
}
//I wrote all this in a single line and used format prettier and this is how my code came out!
userInput = prompt("What is your age");
determineAgeGroup(userInput);
function mathTime(num1, num2, operation) {
  if (operation === "addition") {
    alert(Number(num1) + Number(num2));
  } else if (operation === "subtraction") {
    alert(num1 - num2);
  } else if (operation === "multiplication") {
    alert(num1 * num2);
  } else if (operation === "division") {
    alert(num1 / num2);
  }
}
let number1 = prompt("What is the first number?");
let number2 = prompt("What is the second number?");
number1 = Number(number1); //I chose this example because every other way I tried did not work for me. There wasn't a break in th code it just would not add correctly.
number2 = Number(number2);
let operation = prompt(
  "Which operation will be perform? eg. addition, subtraction multiplication, division"
);

mathTime(number1, number2, operation);
