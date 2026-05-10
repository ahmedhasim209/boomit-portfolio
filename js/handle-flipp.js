/** @format */

const plans = document.querySelectorAll(".brief .plan");
const briefSection = document.querySelector(".plans-flex");

// Only run on mobile screens
if (window.innerWidth <= 480) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          plans.forEach((plan, index) => {
            setTimeout(() => {
              plan.classList.add("flipped");
            }, index * 500);
          });
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  if (briefSection) {
    observer.observe(briefSection);
  }
}
