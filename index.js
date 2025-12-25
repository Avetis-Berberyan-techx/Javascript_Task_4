//header
const headerBlock = document.querySelector('.header');

//main
const mainBlock = document.querySelector('.wrapper');

// Full Name
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const fullNameWrapper = document.querySelector('.full-name');
const errorName = document.querySelectorAll('.error__text');

// Address
const streetAddress = document.getElementById('street_address');
const streetAddress2 = document.getElementById('street_address_2');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipCode = document.getElementById('zip-code');
const address = document.querySelector('.address');

// Phone & Email
const phoneNumber = document.getElementById('phone-number__input');
const phoneNumberWrapper = document.querySelector('.phone-number');
const email = document.getElementById('email');

// Hear about us
const socialMedia = document.getElementById('social-media');
const socialMediaWrapper = document.querySelector('.hear');
const other = document.querySelector('.hear__other');
const otherInput = document.getElementById('other');
let wantOther = false;

// Feedback
const feedbackAbout = document.getElementById('feedback-about');
const suggestions = document.getElementById('suggestions');

//checkboxes
const checkboxes = document.querySelectorAll('.form__checkbox');

// Submit button
const submitBtn = document.getElementById('submit');

// success message
const successImage = document.querySelector('.success');

const inputChecker = (element) => {
  element.style.border =
    element.value.trim() === ''
      ? '2px solid rgb(242, 58, 60)'
      : '2px solid #e0e0e0';
};

const setErrorStyle = (wrapper, errorIndex, show) => {
  wrapper.style.backgroundColor = show ? 'rgb(255, 237, 237)' : '#fff';
  wrapper.style.padding = show ? '15px' : '0px';
  wrapper.style.borderRadius = show ? '15px' : '0px';
  errorName[errorIndex].style.display = show ? 'flex' : 'none';
};

submitBtn.addEventListener('click', () => {
  let isValid = true;

  //input Validation
  inputChecker(firstName);
  inputChecker(lastName);
  inputChecker(streetAddress);
  inputChecker(city);
  inputChecker(state);
  inputChecker(zipCode);
  inputChecker(phoneNumber);
  if (wantOther) {
    inputChecker(otherInput);
  }

  // Social Media validation
  const socialMediaInvalid = socialMedia.value.trim() === 'none';
  socialMedia.style.border = socialMediaInvalid
    ? '2px solid rgb(242, 58, 60)'
    : '2px solid #e0e0e0';
  setErrorStyle(socialMediaWrapper, 4, socialMediaInvalid);
  if (socialMediaInvalid) isValid = false;

  // Full Name validation
  const nameInvalid =
    firstName.value.trim() === '' || lastName.value.trim() === '';
  setErrorStyle(fullNameWrapper, 0, nameInvalid);
  if (nameInvalid) isValid = false;

  //Street validation
  const addressInvalid =
    streetAddress.value.trim() === '' ||
    city.value.trim() === '' ||
    state.value.trim() === '' ||
    zipCode.value.trim() === '';
  setErrorStyle(address, 1, addressInvalid);
  if (addressInvalid) isValid = false;

  //Phone Validation
  const phoneInvalid = phoneNumber.value.trim() === '';
  setErrorStyle(phoneNumberWrapper, 2, phoneInvalid);
  phoneNumber.style.marginBottom = phoneInvalid ? '20px' : '0px';
  if (phoneInvalid) isValid = false;

  // Other validation
  if (wantOther) {
    const otherInvalid = otherInput.value.trim() === '';
    setErrorStyle(other, 5, otherInvalid);
    other.style.marginBottom = otherInvalid ? '20px' : '0px';
    if (otherInvalid) isValid = false;
  }

  if (isValid) {
    console.log('Form is valid! Data:', {
      firstName: firstName.value,
      lastName: lastName.value,
      streetAddress: streetAddress.value,
      streetAddress2: streetAddress2.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      socialMedia: socialMedia.value,
      other: otherInput.value,
      feedbackAbout: feedbackAbout.value,
      suggestions: suggestions.value
    });
    successImage.style.display = 'flex';
    mainBlock.style.display = 'none';
    headerBlock.style.display = 'none';

    setTimeout(() => {
      successImage.style.display = 'none';
      mainBlock.style.display = 'block';
      headerBlock.style.display = 'block';
    }, 3000);
  }
});

socialMedia.addEventListener('change', () => {
  wantOther = socialMedia.value === 'other';
  other.style.display = wantOther ? 'flex' : 'none';
});

document.addEventListener('change', (event) => {
  if (event.target.classList.contains('form__checkbox')) {
    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) checkbox.checked = false;
    });
  }
});
