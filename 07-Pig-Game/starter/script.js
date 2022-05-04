"use strict";

let score00 = document.querySelector("#score--0");
let current00 = document.getElementById("current--0");
let player00 = document.querySelector(".player--0");
let score11 = document.querySelector("#score--1");
let current11 = document.getElementById("current--1");
let player01 = document.querySelector(".player--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let currentPlayer = 0;

let switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player00.classList.toggle("player--active");
  player01.classList.toggle("player--active");
};

let activePlayer, currentScore, playing, scores;

let init = function () {
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  scores = [0, 0];
  score00.textContent = 0;
  score11.textContent = 0;
  current00.textContent = 0;
  current11.textContent = 0;
  diceEl.classList.add("hidden");
  player00.classList.remove("player--winner");
  player01.classList.remove("player--winner");
  player00.classList.add("player--active");
  player01.classList.remove("player--active");
};

init();

btnRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
