const bar = document.getElementById("bar");
const close = document.getElementById("close");
const home = document.getElementById("home");
const about = document.getElementById("aboutme");
const skills = document.getElementById("skill");
const project = document.getElementById("project");
const education = document.getElementById("edu");
const contact = document.getElementById("contactus");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close || home || about || skills || project || education || contact) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
  home.addEventListener("click", () => {
    nav.classList.remove("active");
  });
  about.addEventListener("click", () => {
    nav.classList.remove("active");
  });
  skills.addEventListener("click", () => {
    nav.classList.remove("active");
  });
  project.addEventListener("click", () => {
    nav.classList.remove("active");
  });
  education.addEventListener("click", () => {
    nav.classList.remove("active");
  });
  contact.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.classList.add("active");
  } else {
    mybutton.classList.remove("active");
    mybutton.classList.add("undo");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
