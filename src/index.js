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

const drinksList = document.querySelector('.drinks-list');

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
.then((response) => response.json())
.then((drinks) => {
  // json.forEach((drink) => {
  //   drinksList.appendChild(Drink(drink));
  // });

  for (let i = 0; i < drinks.length; i++) {
    drinksList.appendChild(Drink(drinks[i]));
  }
});