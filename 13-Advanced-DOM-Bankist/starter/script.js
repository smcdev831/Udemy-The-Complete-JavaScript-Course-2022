"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// PROJECT: Bankist Website

///////////////////////////////////////
// How the DOM Really Works

///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

///////////////////////////////////////
// Styles, Attributes, and Classes

///////////////////////////////////////
// Implementing Smooth Scrolling

///////////////////////////////////////
// Types of Events and Event Handlers

///////////////////////////////////////
// Event Propagation: Bubbling and Capturing

///////////////////////////////////////
// Event Propagation in Practice

///////////////////////////////////////
// Event Delegation: Implementing Page Navigation

///////////////////////////////////////
// DOM Traversing

///////////////////////////////////////
// Building a Tabbed Component

///////////////////////////////////////
// Passing Arguements to Event Handlers

///////////////////////////////////////
// Implementing a Sticky Navigation: The Scroll Event

///////////////////////////////////////
// A Better Way: The Intersection Observer

///////////////////////////////////////
// Revealing Elements on Scroll

///////////////////////////////////////
// Lazy Loading Images

///////////////////////////////////////
// Building a Slider Component: Part 1

///////////////////////////////////////
// Building a Slider Component: Part 2

///////////////////////////////////////
// Lifecycle DOM Events

///////////////////////////////////////
// Efficient Script Loading: Defer and Desync
