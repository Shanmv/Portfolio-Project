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

function handleWorkLink() {
  switchActiveWork.classList.add("active");
  removeActiveWork.classList.remove("active");
}

let switchActiveWork = document.querySelector(".portfolioLink");
let removeActiveWork = document.querySelector(".mainLink");
switchActiveWork.addEventListener("click", handleWorkLink);

function handleContactLink() {
  switchActiveContact.classList.add("active");
  removeActiveContact.classList.remove("active");
}

let switchActiveContact = document.querySelector(".contactLink");
let removeActiveContact = document.querySelector(".aboutLink");
switchActiveContact.addEventListener("click", handleContactLink);
