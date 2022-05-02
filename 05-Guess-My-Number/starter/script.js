"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let x = function () {
  console.log(23);
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else {
  }
});

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀
