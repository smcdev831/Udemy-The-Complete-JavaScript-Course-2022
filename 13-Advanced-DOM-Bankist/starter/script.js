"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// PROJECT: Bankist Website

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

///////////////////////////////////////
// How the DOM Really Works

///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

let header = document.querySelector(".header");
let allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
let allButtons = document.getElementsByTagName("button");
console.log(allButtons);

document.getElementsByClassName("btn");

let message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
header.append(message);
// header.prepend(message.cloneNode(true));

header.before(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

///////////////////////////////////////
// Styles, Attributes, and Classes

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

console.log(message.style.height);

// document.documentElement.style.setProperty("--color-primary", "orangered");

let logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));

logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

let link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

link = document.querySelector(".btn--show-modal");
console.log(link.href);
console.log(link.getAttribute("href"));

console.log(logo.dataset.versionNumber);

logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");

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
