import { Layer } from '../Layer';
import './style.css';

export const Drink = (props) => {
  let layersHtml = '';

  for (let i = 0; i < props.layers.length; i++) {
    layersHtml += Layer(props.layers[i]);
  }

  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');

  drinkElm.innerHTML = `<div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
      ${layersHtml}
    </div>
  </div> 
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div> `;

  return drinkElm;
};
