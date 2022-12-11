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

//DO NOT USE - Overrides all classes
// logo.className = "jonas";

logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");

///////////////////////////////////////
// Implementing Smooth Scrolling

let buttonScrollTo = document.querySelector(".btn--scroll-to");
let section1 = document.querySelector("#section--1");

buttonScrollTo.addEventListener("click", function (e) {
  let s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);
  console.log(
    "Height and Width of viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Types of Events and Event Handlers

let alertH1 = function (e) {
  alert("addEventLister: Great! You are reading the heading");

  h1.removeEventListener("mouseenter", alertH1);
};

let h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", alertH1);

// h1.onmouseenter = alertH1;

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

///////////////////////////////////////
// Event Propagation: Bubbling and Capturing

///////////////////////////////////////
// Event Propagation in Practice

let randInt = (min, max) => Math.floor(Math.random() * (max - min + 1));
let randomColor = () =>
  `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;
console.log(randomColor(0, 255));

// document.querySelector(".nav").addEventListener("click", function (e) {
//   console.log("Nav", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
//   e.stopPropagation();
// }, true);

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   console.log("Link", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   console.log("Links", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

///////////////////////////////////////
// Event Delegation: Implementing Page Navigation

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     let id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.classList.contains("nav__link")) {
    console.log("Link");
    let id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

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
