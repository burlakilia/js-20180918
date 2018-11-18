import { Component } from '../component';
import style from './product-card.scss';

export class ProductCard extends Component {

  constructor(data) {
    super(data);
  }

  render() {

    this.el.innerHTML = `
      <div class="card">
<img class="card__image" src="image/1514327576551096128.JPG">
<div class=card__list">
  <h3 class ="card__name">Фонарь HardWay</h3>
  <span class ="card__coment">Для тех, кто не любит простых путей!</span>
  <p class ="card__descr">Для тех, кто не любит простых путей! Кнопка включения утоплена в корпус, чтобы ее можно было нажать только мизиньчиком. Батарейки можно засунуть в батарейный отсек, но чтобы вынуть, фонарь придется разобрать. После включения светит, если потрясти."</p>
    <span class="card__price">Price 100$</span>
    <a href="" class="card__button">Заказать</a>
</div>
</div>
    `;

  }

}