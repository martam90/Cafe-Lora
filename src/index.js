import './style.css';
import { Layer } from './Layer';

// menu
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

// objednavani napoju
const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
let ordered = true;

orderBtn.addEventListener('click', () => {
  if (ordered) {
    orderBtn.textContent = 'Zrušit';
    drinkCup.classList.add('drink__cup--selected');
    ordered = false; // musime zmenit hodnotu promenne
  } else {
    orderBtn.textContent = 'Objednat';
    drinkCup.classList.remove('drink__cup--selected');
    ordered = true;
  }
});

// k komponente Layer
const drinkInfo = document.querySelector('.drink__info');

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];


for (let i = 0; i < layers.length; i++) {
  drinkInfo.innerHTML += Layer(layers[i]);
}
