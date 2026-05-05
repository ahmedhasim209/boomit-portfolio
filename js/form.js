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

//Handle fixed navbar on scroll for ipad pro and desktop screens or above
const navBar = document.getElementById("project-navbar");
const navBarOffset = navBar.offsetTop;
const navBarHeight = navBar.offsetHeight;
const placeholder = document.createElement("div");
placeholder.style.height = navBarHeight + "px";
placeholder.style.margin = "50px 0";
placeholder.style.display = "none";
navBar.parentNode.insertBefore(placeholder, navBar.nextSibling);

window.addEventListener("scroll", () => {
  if (
    window.matchMedia("(min-width: 769px)").matches &&
    window.scrollY > navBarOffset
  ) {
    navBar.classList.add("fixed");
    placeholder.style.display = "block"; // fill the gap
  } else {
    navBar.classList.remove("fixed");
    placeholder.style.display = "none"; // remove the gap
  }
});

// intl-tel-input setup

const phoneInputEl = document.getElementById("phone");
const iti = window.intlTelInput(phoneInputEl, {
  initialCountry: "eg",
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// form & rules

const briefForm = document.getElementById("brief-form");

const rules = {
  company_name: { required: true, message: "Company name is required." },
  industry: { required: true, message: "Please select an industry." },
  website: { required: true, message: "Website is required." },
  founded: { required: true, message: "Please select when you were founded." },
  "social-media": {
    required: true,
    message: "Please enter your social media.",
  },
  instgram: { required: true, message: "Please enter your Instagram link." },
  "contact-person": { required: true, message: "Contact person is required." },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address.",
  },
  tov: { required: true, message: "Please select a tone of voice." },
  persona: { required: true, message: "Please select a persona." },
  audience: { required: true, message: "Please select a target audience." },
  "contact-time": {
    required: true,
    message: "Please select a preferred contact time.",
  },
  budget: { required: true, message: "Please select a budget." },
};

// checkbox groups that are required
const requiredCheckboxGroups = [
  { name: "platforms", message: "Please select at least one platform." },
  { name: "services", message: "Please select at least one service." },
  {
    name: "media_production",
    message: "Please select at least one media production type.",
  },
];

// helper functions

function validateField(name, value) {
  const rule = rules[name];
  if (!rule) return null;
  if (rule.required && !value.trim()) return rule.message;
  if (rule.pattern && !rule.pattern.test(value)) return rule.message;
  return null;
}

function validatePhone() {
  if (!iti.isValidNumber()) {
    showError(phoneInputEl, "Enter a valid phone number.");
    return false;
  }
  clearError(phoneInputEl);
  return true;
}

// validate that at least one checkbox is checked in a group
function validateCheckboxGroup(name, message) {
  const checked = getCheckedValues(name);
  const firstCheckbox = document.querySelector(`input[name="${name}"]`);
  if (checked.length === 0) {
    showCheckboxError(firstCheckbox, message);
    return false;
  }
  clearCheckboxError(firstCheckbox);
  return true;
}

function showError(input, message) {
  input.classList.add("error");
  input.closest(".field-group").classList.add("error-active");
  input.closest(".field-group").querySelector(".error-msg").textContent =
    message;
}

function clearError(input) {
  input.classList.remove("error");
  input.closest(".field-group").classList.remove("error-active");
  input.closest(".field-group").querySelector(".error-msg").textContent = "";
}

// for checkboxes we target the field-group directly since
// there's no single input to attach the error to
function showCheckboxError(input, message) {
  input.closest(".field-group").classList.add("error-active");
  input.closest(".field-group").querySelector(".error-msg").textContent =
    message;
}

function clearCheckboxError(input) {
  input.closest(".field-group").classList.remove("error-active");
  input.closest(".field-group").querySelector(".error-msg").textContent = "";
}

function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(
    (cb) => cb.value,
  );
}

// blur validation

briefForm
  .querySelectorAll("input:not([type='checkbox']), select")
  .forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.id === "phone") {
        validatePhone();
      } else {
        const error = validateField(input.name, input.value);
        error ? showError(input, error) : clearError(input);
      }
    });
  });

// clear checkbox group error as soon as user checks one
requiredCheckboxGroups.forEach(({ name, message }) => {
  document.querySelectorAll(`input[name="${name}"]`).forEach((cb) => {
    cb.addEventListener("change", () => {
      validateCheckboxGroup(name, message);
    });
  });
});

// submit handler

briefForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let isValid = true;

  // validate all inputs and selects except phone
  briefForm
    .querySelectorAll("input:not([type='checkbox']):not(#phone), select")
    .forEach((input) => {
      const error = validateField(input.name, input.value);
      if (error) {
        showError(input, error);
        isValid = false;
      } else {
        clearError(input);
      }
    });

  // validate phone
  if (!validatePhone()) isValid = false;

  // validate all checkbox groups
  requiredCheckboxGroups.forEach(({ name, message }) => {
    if (!validateCheckboxGroup(name, message)) isValid = false;
  });

  // scroll to first error
  if (!isValid) {
    const firstError = briefForm.querySelector(".error, .error-active");
    if (firstError) {
      firstError.closest(".field-group").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    return;
  }

  // collect all data
  const fd = new FormData(briefForm);

  const data = {
    company_name: fd.get("company_name"),
    industry: fd.get("industry"),
    website: fd.get("website"),
    founded: fd.get("founded"),
    social_media: fd.get("social-media"),
    instagram: fd.get("instgram"),
    contact_person: fd.get("contact-person"),
    email: fd.get("email"),
    phone: iti.getNumber(),
    platforms: getCheckedValues("platforms").join(", "),
    tov: fd.get("tov"),
    persona: fd.get("persona"),
    audience: fd.get("audience"),
    contact_time: fd.get("contact-time"),
    services: getCheckedValues("services").join(", "),
    media_production: getCheckedValues("media_production").join(", "),
    budget: fd.get("budget"),
  };

  console.log(data);

  const btn = briefForm.querySelector("button[type='submit']");
  btn.disabled = true;
  btn.textContent = "Sending...";
});

// Handle dot pattern drawing on the right side of the form section for tablets screens and above
function drawDotPattern() {
  const formSection = document.querySelector("main .form");
  if (!formSection) return;

  let canvas = formSection.querySelector(".dot-pattern-canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.classList.add("dot-pattern-canvas");
    canvas.style.cssText =
      "position:absolute; top:0; right:10%; pointer-events:none; z-index:1;";
    formSection.style.position = "relative";
    formSection.style.overflow = "hidden";
    formSection.appendChild(canvas);
  }

  const width = window.innerWidth;

  const config =
    width <= 768 ? null
    : width <= 1024 ? { dot: 18, colSpacing: 28, padding: 10 }
    : { dot: 23, colSpacing: 36, padding: 12 };

  if (!config) {
    canvas.style.display = "none";
    return;
  }

  canvas.style.display = "block";

  const { dot, colSpacing, padding } = config;
  const RADIUS = dot / 2;
  const GAP = Math.round(dot * 0.09);
  const COMP_GAP = Math.round(dot * 0.3);

  const patternWidth = dot + colSpacing + dot;
  const stripWidth = patternWidth + padding * 2;

  canvas.width = stripWidth;
  canvas.height = formSection.offsetHeight;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = padding + RADIUS;

  let y = RADIUS;
  let componentIndex = 0;

  while (y - RADIUS < canvas.height) {
    for (let d = 0; d < 2; d++) {
      const cy = y + d * (dot + GAP);
      if (cy + RADIUS > canvas.height) break;

      for (let col = 0; col < 2; col++) {
        const cx = centerX + col * colSpacing;
        const isSolid = componentIndex % 2 === 0 ? col === 0 : col === 1;

        ctx.beginPath();
        ctx.arc(cx, cy, RADIUS, 0, Math.PI * 2);

        if (isSolid) {
          ctx.fillStyle = "#000000";
          ctx.fill();
        } else {
          ctx.fillStyle = "transparent";
          ctx.strokeStyle = "#000000";
          ctx.lineWidth = Math.max(1, dot * 0.065);
          ctx.stroke();
        }
      }
    }

    y += dot + GAP + dot + COMP_GAP;
    componentIndex++;
  }
}

drawDotPattern();
window.addEventListener("resize", drawDotPattern);
