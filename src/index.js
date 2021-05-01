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

const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
let ordered = true;

orderBtn.addEventListener('click', () => {
  if (ordered) {
    orderBtn.textContent = 'Zrušit';
    drinkCup.classList.add('drink__cup--selected');
    ordered = false;
  } else {
    orderBtn.textContent = 'Objednat';
    drinkCup.classList.remove('drink__cup--selected');
    ordered = true;
  }
});

