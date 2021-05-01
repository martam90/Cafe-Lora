import './style.css';

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

for (let navLink of navLinks) {
  navLink.addEventListener('click', () => {
    nav.classList.add('nav-closed');
  });
}
