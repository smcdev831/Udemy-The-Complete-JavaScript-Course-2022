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

let hh1 = document.querySelector("h1");

console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest(".header"));

// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--gradient-primary)";

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });

///////////////////////////////////////
// Building a Tabbed Component

let tabs = document.querySelectorAll(".operations__tab");
let tabsContainer = document.querySelector(".operations__tab-container");
let tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  let clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  clicked.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

///////////////////////////////////////
// Passing Arguements to Event Handlers

let nav = document.querySelector(".nav");

let handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    let link = e.target;
    let siblings = link.closest(".nav").querySelectorAll(".nav__link");
    let logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1);
});

///////////////////////////////////////
// Implementing a Sticky Navigation: The Scroll Event
// let initialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

///////////////////////////////////////
// A Better Way: The Intersection Observer
// let obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// let obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// let observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

header = document.querySelector(".header");
let navHeight = nav.getBoundingClientRect().height;
let stickyNav = function (entries) {
  let [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

let headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////
// Revealing Elements on Scroll

let revealSection = function (entries, observer) {
  let [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

let sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

///////////////////////////////////////
// Lazy Loading Images

let imgTargets = document.querySelectorAll("img[data-src]");

let loadImg = function (entries, observer) {
  let [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

let imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

///////////////////////////////////////
// Building a Slider Component: Part 1

let slides = document.querySelectorAll(".slide");
let btnLeft = document.querySelector(".slider__btn--left");
let btnRight = document.querySelector(".slider__btn--right");
let dotContainer = document.querySelector(".dots");
let currentSlide = 0;
let maxSlide = slides.length;

let slider = document.querySelector(".slider");
slider.style.overflow = "visible";

let goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

let nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

let prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

let activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(".dots__dot[data-slide = `${slide}`]")
    .classList.add("dots__dot--active");
};

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    let { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

///////////////////////////////////////
// Building a Slider Component: Part 2

///////////////////////////////////////
// Lifecycle DOM Events

///////////////////////////////////////
// Efficient Script Loading: Defer and Desync
