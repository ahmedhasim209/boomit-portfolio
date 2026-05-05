/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("ul.pages li a[data-page]");
  console.log(links);
  links.forEach((link) => {
    link.classList.remove("active");

    if (link.dataset.page === CURRENT_PAGE) {
      link.classList.add("active");
    }
  });
});
