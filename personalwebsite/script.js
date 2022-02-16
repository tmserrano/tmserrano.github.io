/*section transitions*/

/*Up Transition*/
function revealUp() {
  var reveals = document.querySelectorAll(".reveal-up");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } /*else {
        reveals[i].classList.remove("active");
      }*/
  }
}
window.addEventListener("scroll", revealUp);

/*Left Transition*/
function revealLeft() {
  var reveals = document.querySelectorAll(".reveal-left");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } /*else {
        reveals[i].classList.remove("active");
      }*/
  }
}
window.addEventListener("scroll", revealLeft);

/*Right Transition*/
function revealRight() {
  var reveals = document.querySelectorAll(".reveal-right");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 250;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } /*else {
        reveals[i].classList.remove("active");
      }*/
  }
}
window.addEventListener("scroll", revealRight);


/*scroll up to show navbar*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNav").style.top = "0";
  } else {
    document.getElementById("myNav").style.top = "-300px";
  }
  prevScrollpos = currentScrollPos;
}

/*navbar drop toggle | colapse navbar on click*/
const navbar = document.getElementById("navi");
const link = document.getElementById("nav-item");

toggle.onclick = function () {
  navbar.classList.toggle("active");
}

link.onclick = function () {
  navbar.classList.toggle("active");
}
