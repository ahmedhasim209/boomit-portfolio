/** @format */
// declare toggle menu variables
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-xmark");
const list = document.querySelector(".toggle-list");

// toggle menu event listeners
// when the menu button is clicked, show the list and prevent scrolling
menuBtn.addEventListener("click", () => {
  //   list.style.display = "block";
  list.style.right = "0";
  document.body.style.overflow = "hidden";
});
// when the close button is clicked, hide the list and restore scrolling
closeBtn.addEventListener("click", () => {
  list.style.right = "-101%";
  //   list.style.display = "none";
  document.body.style.overflow = "";
});
