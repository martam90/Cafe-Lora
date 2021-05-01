import './style.css';
import { Layer } from './Layer';
import { Drink } from './Drink';

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
// const orderBtn = document.querySelector('.order-btn');
// const drinkCup = document.querySelector('.drink__cup');
// let ordered = true;

// orderBtn.addEventListener('click', () => {
//   if (ordered) {
//     orderBtn.textContent = 'Zrušit';
//     drinkCup.classList.add('drink__cup--selected');
//     ordered = false; // musime zmenit hodnotu promenne
//   } else {
//     orderBtn.textContent = 'Objednat';
//     drinkCup.classList.remove('drink__cup--selected');
//     ordered = true;
//   }
// });

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

const drink = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

const drinksList = document.querySelector('.drinks-list');
drinksList.appendChild(Drink(drink));

