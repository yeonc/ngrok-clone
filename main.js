'use strict';

const headerMenuButton = document.querySelector('.header-menu-button');
const dropdownMenu = document.querySelector('.header-dropdown');
const dropdownCloseButton = document.querySelector(
  '.header-dropdown .close-button'
);
const widgetButton = document.querySelector('.widget .widget-button');
const widgetFormContainer = document.querySelector('.widget-form');
const widgetForm = document.querySelector('.form-contents form');
const widgetFormSendButton = document.querySelector(
  '.widget-form .send-button'
);

let isWidgetButtonClicked = false;

headerMenuButton.addEventListener('click', () => {
  dropdownMenu.classList.remove('hidden');
});

dropdownCloseButton.addEventListener('click', () => {
  dropdownMenu.classList.add('hidden');
});

widgetButton.addEventListener('click', () => {
  if (!isWidgetButtonClicked) {
    widgetButton.classList.add('clicked');
    widgetFormContainer.classList.remove('hidden');
    isWidgetButtonClicked = true;
  } else {
    widgetButton.classList.remove('clicked');
    widgetFormContainer.classList.add('hidden');
    isWidgetButtonClicked = false;
  }
});

// Form 유효성 검사에서 에러가 발생한 경우, 어떤 에러가 발생했는지에 따라서 HTML 문서에 에러 메시지를 다르게 표시함
widgetForm.addEventListener('submit', event => {
  const formErrorWrapper = document.querySelector('.form-contents .form-error');
  const formErrorMessage = document.querySelector(
    '.form-contents .form-error .message'
  );
  const userName = document.querySelector(
    '.form-contents .user-name input[type="text"]'
  );
  const userEmail = document.querySelector(
    '.form-contents .user-email input[type="email"]'
  );
  const userMessage = document.querySelector(
    '.form-contents .user-message textarea'
  );
  const asteriskOfUserName = document.querySelector(
    '.form-contents .user-name .asterisk'
  );
  const asteriskOfUserEmail = document.querySelector(
    '.form-contents .user-email .asterisk'
  );
  const asteriskOfUserMessage = document.querySelector(
    '.form-contents .user-message .asterisk'
  );

  if (
    !userEmail.validity.valid ||
    !userName.validity.valid ||
    !userMessage.validity.valid
  ) {
    showError();
    event.preventDefault();
  }

  widgetForm.addEventListener('input', () => {
    formErrorWrapper.classList.add('is-not-active');
    userName.classList.remove('error-border');
    userEmail.classList.remove('error-border');
    userMessage.classList.remove('error-border');
    asteriskOfUserName.classList.remove('error-color');
    asteriskOfUserEmail.classList.remove('error-color');
    asteriskOfUserMessage.classList.remove('error-color');
  });

  function showError() {
    if (userName.validity.valueMissing) {
      formErrorMessage.textContent = 'Please complete all required fields';
      userName.classList.add('error-border');
      asteriskOfUserName.classList.add('error-color');
      userName.focus();
    } else if (
      userEmail.validity.valueMissing ||
      userEmail.validity.typeMismatch
    ) {
      formErrorMessage.textContent = 'Please enter a valid email address';
      userEmail.classList.add('error-border');
      asteriskOfUserEmail.classList.add('error-color');
      userEmail.focus();
    } else if (userMessage.validity.valueMissing) {
      formErrorMessage.textContent = 'Please complete all required fields';
      userMessage.classList.add('error-border');
      asteriskOfUserMessage.classList.add('error-color');
      userMessage.focus();
    }
    formErrorWrapper.classList.remove('is-not-active');
  }
});

// Widget form 안에 있는 SEND button을 클릭했을 때의 애니메이션
widgetFormSendButton.addEventListener('click', event => {
  event.target.animate(
    [
      { padding: '15px 12px', easing: 'ease-out' },
      {
        padding: '17px 12px',
        border: '2px solid rgb(61, 54, 131)',
        easing: 'ease-out',
        offset: 0.4,
      },
      {
        padding: '17px 12px',
        border: '2px solid rgb(61, 54, 131)',
        easing: 'ease-out',
        offset: 1,
      },
    ],
    {
      duration: 600,
    }
  );
});

// Typed.js
const options = {
  strings: [
    'testing your chatbot. ^1500',
    'SSH access to your Raspberry Pi. ^1500',
    'building webhook integrations. ^1500',
    'exposing your local web server. ^1500',
    'testing on mobile devices. ^1500',
    'sending previews to clients. ^1500',
  ],
  typeSpeed: 70,
  backSpeed: 20,
  loop: true,
  showCursor: false,
};
const typed = new Typed('.typed', options);
