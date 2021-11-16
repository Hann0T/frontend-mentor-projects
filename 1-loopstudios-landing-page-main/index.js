const menu = document.querySelector('.main-header__list');
const openButton = document.querySelector('.main-header__hamburger');
const closeButton = document.querySelector('.main-header__close');
const Body = document.querySelector('body');

openButton.addEventListener('click', () => {
  toggleHidden();
  Body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  toggleHidden();
  Body.style.overflow = 'auto';
});

const toggleHidden = () => {
  menu.classList.toggle('hidden');
  closeButton.classList.toggle('hidden');
  openButton.classList.toggle('hidden');
};
