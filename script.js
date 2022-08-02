let showOnPx = 100;
let backToTopButton = document.querySelector(".to-top");
let hideNavBar = document.querySelector(".navbar");

let scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.add("showBtn");
    hideNavBar.classList.add("hiddenNavBar");
  } else {
    backToTopButton.classList.remove("showBtn");
    hideNavBar.classList.remove("hiddenNavBar");
  }
});

function handleNavBar() {
  hideNavBar.classList.remove("hiddenNavBar");
}

let showNavBar = document.querySelector(".body");
showNavBar.addEventListener("click", handleNavBar);

function handleNavLink1() {
  switchActive1.classList.add("active");
  removeActive1.classList.remove("active");
}

let switchActive1 = document.querySelector(".portfolioLink");
let removeActive1 = document.querySelector(".mainLink");
switchActive1.addEventListener("click", handleNavLink1);

function handleNavLink2() {
  switchActive2.classList.add("active");
  removeActive2.classList.remove("active");
}

let switchActive2 = document.querySelector(".contactLink");
let removeActive2 = document.querySelector(".aboutLink");
switchActive2.addEventListener("click", handleNavLink2);
