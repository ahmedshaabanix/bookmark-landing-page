// nav bar
let closeMenu = document.getElementById("close");
let mobileNav = document.getElementById("mobile-nav");
let openMenu = document.getElementById("open");
console.log(closeMenu);
closeMenu.addEventListener("click", () => {
  mobileNav.style.display = "none";
});
openMenu.addEventListener("click", () => {
  mobileNav.style.display = "block";
});
// feature tab
const tabs = document.querySelectorAll(".tabs .flex li  .btn-feature");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".tabs-content ");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.id);
    document.querySelector(e.currentTarget.dataset.id).style.display = "flex";
  });
});

// accordion
const accordion = document.querySelectorAll(
  ".accordion .question .question-content"
);
let tabsAccordion = Array.from(accordion);
let answer = document.querySelectorAll(".accordion .question .answer");
let divsAnswer = Array.from(answer);

tabsAccordion.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsAccordion.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsAnswer.forEach((div) => {
      div.style.maxHeight = "0";
    });
    console.log(e.currentTarget.dataset.id);

    document.querySelector(e.currentTarget.dataset.id).style.maxHeight = "100%";
  });
});
