"use strict";

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
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector(".score").textContent =
          guess > secretNumber
            ? "🔼 Guess is too high!"
            : "🔽 Guess is too low!";
        score = document.querySelector(".score").textContent = score - 1;
      } else {
        document.querySelector(".message").textContent =
          "💥 You lost the game! 💥";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

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
