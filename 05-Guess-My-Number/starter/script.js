"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚨 No number!";
  } else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").textContent = "Correct Number! 🎉";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      score = document.querySelector(".score").textContent = score - 1;
      document.querySelector(".message").textContent = "🔼 Guess is too high!";
    } else {
      document.querySelector(".message").textContent =
        "💥 You lost the game! 💥";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "🔽 Guess is too low!";
    } else {
      document.querySelector(".message").textContent =
        "💥 You lost the game! 💥";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Coding Challenge #1
// Implement a game reset functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields

// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
