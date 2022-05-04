"use strict";

let score00 = document.querySelector("#score--0");
let current00 = document.getElementById("current--0");
let score11 = document.querySelector("#score--1");
let current11 = document.getElementById("current--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let currentScore = 0;

score00.textContent = 0;
score11.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice != 1) {
    currentScore += dice;
    current00.textContent = currentScore;
  } else {
  }
});
