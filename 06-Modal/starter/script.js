"use strict";

let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close-modal");
let show = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < show.length; i++) {
  show[i].addEventListener("click", openModal);
}

close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (keyPress) {
  console.log(keyPress.key);
  if (keyPress.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
