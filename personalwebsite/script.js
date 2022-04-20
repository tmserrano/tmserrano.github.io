/*section transitions (Horizontal and vertical)*/
const reveals = document.querySelectorAll(".section");
const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hiddenX");
  entry.target.classList.remove("section--hiddenYUP");
  entry.target.classList.remove("section--hiddenYDown");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
  rootMargin: "-125px",
});
reveals.forEach((section) => {
  sectionObserver.observe(section);
});

/*when scroll down hide navbar && when scroll up show navbar*/
let prevScroll = 0;
const dynamicNavbar = () => {
  let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    document.getElementById("myNav").style.top = 0;
  } else {
    document.getElementById("myNav").style.top = "-100px";
  }
  prevScroll = currentScroll;
};
window.addEventListener("scroll", dynamicNavbar);

/*show/hide links from hamburger && collapse navbar on click*/
const navbar = document.getElementById("navi");
const link = document.getElementById("nav-item");
const showHideNav = () => {
  navbar.classList.toggle("active");
};
toggle.addEventListener("click", showHideNav);
link.addEventListener("click", showHideNav);

//Slide Implementation
const slides = document.querySelectorAll(".slideContainer__project");
const btnLeft = document.querySelector(".slideContainer__btn--left");
const btnRight = document.querySelector(".slideContainer__btn--right");

let curSlide = 0;
const maxSlide = slides.length;

const moveSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  moveSlide(curSlide);
};

const previousSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  moveSlide(curSlide);
};

const init = () => {
  moveSlide(0);
};
init();

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);
