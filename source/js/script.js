/* Mobile menu */

const body = document.querySelector('.page-body');
const navToggle = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.main-nav__list');

body.classList.remove('no-js');

navToggle.addEventListener('click', () => {
  if (navToggle.classList.contains('main-nav__toggle--closed')) {
    navList.classList.add('main-nav__list--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  }
  else {
    navList.classList.remove('main-nav__list--opened');
    navToggle.classList.add('main-nav__toggle--closed');
  }
});

if (body.classList.contains('page-body--form')) {

  /* Feedback popups */

  const feedbackForm = document.querySelector('.feedback');
  const userName = feedbackForm.querySelector('.feedback__initials-input--name');
  const userSurname = feedbackForm.querySelector('.feedback__initials-input--surname');
  const userPhone = feedbackForm.querySelector('.feedback__contacts-input--phone');
  const userEmail = feedbackForm.querySelector('.feedback__contacts-input--email');
  const successPopup = document.querySelector('.success-popup');
  const successPopupClose = successPopup.querySelector('.success-popup__button');
  const failurePopup = document.querySelector('.failure-popup');
  const failurePopupClose = failurePopup.querySelector('.failure-popup__button');

  feedbackForm.addEventListener('submit', (evt) => {
    if (!userName.value || !userSurname.value || !userEmail.value || !userPhone.value) {
      evt.preventDefault();
      failurePopup.classList.add('popup--show');
    } else {
      successPopup.classList.add('popup--show');
    }
  });

  successPopupClose.addEventListener('click', () => {
    successPopup.classList.remove('popup--show');
  });

  failurePopupClose.addEventListener('click', () => {
    failurePopup.classList.remove('popup--show');
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successPopup.classList.remove('popup--show');
      failurePopup.classList.remove('popup--show');
    }
  });
}
