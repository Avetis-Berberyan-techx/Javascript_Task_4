//header
const headerBlock = document.querySelector('.header');

// //main
const mainBlock = document.querySelector('.wrapper');

// Full Name
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const fullNameWrapper = document.getElementsByClassName('full-name')[0];
const errorName = document.getElementsByClassName('error__text');
console.log(errorName);

// Address
const streetAddress = document.getElementById('street_address');
const streetAddress2 = document.getElementById('street_address_2');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipCode = document.getElementById('zip-code');
const address = document.getElementsByClassName('address')[0];

// Phone & Email
const phoneNumber = document.getElementById('phone-number__input');
const phoneNumberWrapper = document.getElementsByClassName('phone-number')[0];
const email = document.getElementById('email');

// Hear about us
const socialMedia = document.getElementById('social-media');
const socialMediaWrapper = document.getElementsByClassName('hear')[0];
const other = document.getElementsByClassName('hear__other')[0];
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

const successImage = document.getElementsByClassName('success')[0];

const inputChecker = (element) => {
  if (element.value.trim() === '') {
    element.style.border = '2px solid rgb(242, 58, 60)';
  } else {
    element.style.border = '2px solid #e0e0e0';
  }
};

submitBtn.addEventListener('click', () => {
  let isValid = true; // overall form validity

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
  if (socialMedia.value.trim() === 'none') {
    socialMedia.style.border = '2px solid rgb(242, 58, 60)';
    socialMediaWrapper.style.backgroundColor = 'rgb(255, 237, 237)';
    socialMediaWrapper.style.padding = '15px';
    socialMediaWrapper.style.borderRadius = '15px';
    errorName[4].style.display = 'flex';
    isValid = false;
  } else {
    socialMedia.style.border = '2px solid #e0e0e0';
    socialMediaWrapper.style.backgroundColor = '#fff';
    socialMediaWrapper.style.padding = '0px';
    socialMediaWrapper.style.borderRadius = '0px';
    errorName[4].style.display = 'none';
  }

  // Full Name validation
  if (firstName.value.trim() === '' || lastName.value.trim() === '') {
    isValid = false;
    fullNameWrapper.style.backgroundColor = 'rgb(255, 237, 237)';
    fullNameWrapper.style.padding = '15px';
    fullNameWrapper.style.borderRadius = '15px';
    errorName[0].style.display = 'flex';
  } else {
    fullNameWrapper.style.backgroundColor = '#fff';
    fullNameWrapper.style.padding = '0px';
    fullNameWrapper.style.borderRadius = '0px';
    errorName[0].style.display = 'none';
  }

  //Street validation

  if (
    streetAddress.value.trim() === '' ||
    city.value.trim() === '' ||
    state.value.trim() === '' ||
    zipCode.value.trim() === ''
  ) {
    address.style.backgroundColor = 'rgb(255, 237, 237)';
    address.style.padding = '15px';
    address.style.borderRadius = '15px';
    errorName[1].style.display = 'flex';
    isValid = false;
  } else {
    address.style.backgroundColor = '#fff';
    address.style.padding = '0px';
    address.style.borderRadius = '0px';
    errorName[1].style.display = 'none';
  }

  //Phone Validation

  if (phoneNumber.value.trim() === '') {
    isValid = false;
    phoneNumberWrapper.style.backgroundColor = 'rgb(255, 237, 237)';
    phoneNumberWrapper.style.padding = '15px';
    phoneNumberWrapper.style.borderRadius = '15px';
    phoneNumber.style.marginBottom = '20px';
    errorName[2].style.display = 'flex';
  } else {
    phoneNumberWrapper.style.backgroundColor = '#fff';
    phoneNumberWrapper.style.padding = '0px';
    phoneNumberWrapper.style.borderRadius = '0px';
    phoneNumber.style.marginBottom = '0px';
    errorName[2].style.display = 'none';
  }
  if (wantOther && otherInput.value.trim() === '') {
    isValid = false;
    other.style.backgroundColor = 'rgb(255, 237, 237)';
    other.style.padding = '15px';
    other.style.borderRadius = '15px';
    other.style.marginBottom = '20px';
    errorName[5].style.display = 'flex';
  } else {
    other.style.backgroundColor = '#fff';
    other.style.padding = '0px';
    other.style.borderRadius = '0px';
    other.style.marginBottom = '0px';
    errorName[5].style.display = 'none';
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
      other: other.value,
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
  console.log('changing to', socialMedia.value);
  if (socialMedia.value === 'other') {
    wantOther = true;
    other.style.display = 'flex';
  } else {
    wantOther = false;
    other.style.display = 'none';
  }
});

document.addEventListener('change', (event) => {
  checkboxes.forEach((checkbox) => {
    if (checkbox !== event.target) {
      checkbox.checked = false;
    }
  });
});
