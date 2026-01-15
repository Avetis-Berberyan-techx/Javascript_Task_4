
//elements
const headerBlock = document.querySelector(".header");
const mainBlock = document.querySelector(".wrapper");
const successImage = document.querySelector(".success");

const inputs = {
  firstName: document.getElementById("first-name"),
  lastName: document.getElementById("last-name"),
  street1: document.getElementById("street_address"),
  street2: document.getElementById("street_address_2"),
  city: document.getElementById("city"),
  state: document.getElementById("state"),
  zip: document.getElementById("zip-code"),
  phone: document.getElementById("phone-number__input"),
  email: document.getElementById("email"),
  other: document.getElementById("other"),
};

const wrappers = {
  fullName: document.querySelector(".full-name"),
  address: document.querySelector(".address"),
  phone: document.querySelector(".phone-number"),
  social: document.querySelector(".hear"),
  other: document.querySelector(".hear__other"),
};

const socialMedia = document.getElementById("social-media");
const feedbackAbout = document.getElementById("feedback-about");
const suggestions = document.getElementById("suggestions");
const submitBtn = document.getElementById("submit");
const errorTexts = document.querySelectorAll(".error__text");
const checkboxes = document.querySelectorAll(".form__checkbox");

let wantOther = false;

// =====================
// HELPERS
// =====================
const isEmpty = (el) => el.value.trim() === "";

const markInput = (el, invalid) => {
  el.style.border = invalid
    ? "2px solid rgb(242, 58, 60)"
    : "2px solid #e0e0e0";
};

const setError = (wrapper, index, show) => {
  wrapper.style.backgroundColor = show ? "rgb(255,237,237)" : "#fff";
  wrapper.style.padding = show ? "15px" : "0";
  wrapper.style.borderRadius = show ? "15px" : "0";
  errorTexts[index].style.display = show ? "flex" : "none";
};

const validateInputs = (list) =>
  list.some((el) => {
    const invalid = isEmpty(el);
    markInput(el, invalid);
    return invalid;
  });

// =====================
// SUBMIT
// =====================
submitBtn.addEventListener("click", () => {
  let isValid = true;

  // Full name
  const nameInvalid = validateInputs([inputs.firstName, inputs.lastName]);
  setError(wrappers.fullName, 0, nameInvalid);
  if (nameInvalid) isValid = false;

  // Address
  const addressInvalid = validateInputs([
    inputs.street1,
    inputs.city,
    inputs.state,
    inputs.zip,
  ]);
  setError(wrappers.address, 1, addressInvalid);
  if (addressInvalid) isValid = false;

  // Phone
  const phoneInvalid = validateInputs([inputs.phone]);
  setError(wrappers.phone, 2, phoneInvalid);
  inputs.phone.style.marginBottom = phoneInvalid ? "20px" : "0";
  if (phoneInvalid) isValid = false;

  // Social Media
  const socialInvalid = socialMedia.value === "none";
  markInput(socialMedia, socialInvalid);
  setError(wrappers.social, 4, socialInvalid);
  if (socialInvalid) isValid = false;

  // Other
  if (wantOther) {
    const otherInvalid = validateInputs([inputs.other]);
    setError(wrappers.other, 5, otherInvalid);
    inputs.other.style.marginBottom = otherInvalid ? "20px" : "0";
    if (otherInvalid) isValid = false;
  }

  // SUCCESS
  if (isValid) {
    console.log("Form Data:", {
      firstName: inputs.firstName.value,
      lastName: inputs.lastName.value,
      street1: inputs.street1.value,
      street2: inputs.street2.value,
      city: inputs.city.value,
      state: inputs.state.value,
      zip: inputs.zip.value,
      phone: inputs.phone.value,
      email: inputs.email.value,
      social: socialMedia.value,
      other: inputs.other.value,
      feedbackAbout: feedbackAbout.value,
      suggestions: suggestions.value,
    });

    successImage.style.display = "flex";
    mainBlock.style.display = "none";
    headerBlock.style.display = "none";

    setTimeout(() => {
      successImage.style.display = "none";
      mainBlock.style.display = "block";
      headerBlock.style.display = "block";
    }, 3000);
  }
});

// =====================
// EVENTS
// =====================
socialMedia.addEventListener("change", () => {
  wantOther = socialMedia.value === "other";
  wrappers.other.style.display = wantOther ? "flex" : "none";
});

document.addEventListener("change", (e) => {
  if (!e.target.classList.contains("form__checkbox")) return;
  checkboxes.forEach((cb) => (cb.checked = cb === e.target));
});
