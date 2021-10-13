'use strict';

const headerMenuButton = document.querySelector('.header-menu-button');
const dropdownMenu = document.querySelector('.header-dropdown');
const dropdownCloseButton = document.querySelector(
  '.header-dropdown .close-button'
);

headerMenuButton.addEventListener('click', () => {
  dropdownMenu.classList.remove('hidden');
});

dropdownCloseButton.addEventListener('click', () => {
  dropdownMenu.classList.add('hidden');
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
