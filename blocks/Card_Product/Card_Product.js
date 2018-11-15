(function () {
  'use strict';

  class Card {

    constructor({el, options}) {
      this.el = el;
      this.options = options;
    }

    render() {

      this.el.innerHTML = `
        <div class="product-item">
    <h2>Фонарь HardWay</h2>
  <div class="product-img">
    <a href="">
      <img src="image/1514327576551096128.JPG">
    </a>
  </div>
  <div class="product-list">
    <h3>Для тех, кто не любит простых путей!</h3>
    <p>Для тех, кто не любит простых путей! Кнопка включения утоплена в корпус, чтобы ее можно было нажать только мизиньчиком. Батарейки можно засунуть в батарейный отсек, но чтобы вынуть, фонарь придется разобрать. После включения светит, если потрясти.</p>
    <span class="price">Цена  $100 </span>
    </div>
</div>
  </div>
      `;

    }

  }

  window.Button = Card;
})();