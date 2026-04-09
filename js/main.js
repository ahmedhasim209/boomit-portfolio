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

// setup intl-tel-input + validation + submit for contact us page form

// setup intl-tel-input
const phoneInput = document.getElementById("phone");
const iti = window.intlTelInput(phoneInput, {
  initialCountry: "eg",
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const form = document.getElementById("contact-form");

// validation briefRules
const rules = {
  company: {
    required: true,
    minLength: 2,
    message: "Enter a valid company name.",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address.",
  },
};
function validateField(name, value) {
  const rule = rules[name];
  if (!rule) return null;
  if (rule.required && !value.trim()) return `This field is required.`;
  if (rule.minLength && value.trim().length < rule.minLength)
    return rule.message;
  if (rule.pattern && !rule.pattern.test(value)) return rule.message;

  return null;
}

// validate phone separately using intl-tel-input's built-in validator

function validatePhone() {
  if (!iti.isValidNumber()) {
    showError(phoneInput, "Enter a valid phone number.");
    return false;
  }
  clearError(phoneInput);
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

// validate on blur
form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.name === "phone") {
      validatePhone();
    } else {
      const error = validateField(input.name, input.value);
      error ? showError(input, error) : clearError(input);
    }
  });
});

// handle submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let isValid = true;

  // validate company and email
  form.querySelectorAll("input:not(#phone)").forEach((input) => {
    const error = validateField(input.name, input.value);
    if (error) {
      showError(input, error);
      isValid = false;
    } else clearError(input);
  });

  // validate phone
  if (!validatePhone()) isValid = false;

  if (!isValid) return;

  // collect data
  const data = {
    company: form.company.value.trim(),
    email: form.email.value.trim(),
    phone: iti.getNumber(), //
  };

  console.log(data);

  // disable button
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = "submitting...";
});
