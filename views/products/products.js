import { Products } from '../../blocks/products/products';
import { ProductCard } from '../../blocks/product-card/product-card';
import { View } from '../view';

import template from './products.pug';

export class ProductsView extends View{

  constructor(el) {
    super(el);

    this.render();

    this.products = new Products({
      el: document.querySelector('.js-products')
    });

    this.card = new ProductCard({
      el: document.querySelector('.js-product-card')
    });

    this.products.render({
      items: [{
        title: 'Xbox 360',
        desc: 'Игровая приствка'
      }, {
        title: 'Nintendo Swtich',
        desc: 'Гибридная'
      }, {
        title: 'Playstation 4',
        desc: 'Игровая'
      }]
    });

    this.card.render({
      title: 'Hello',
      desc: 'world'
    });

    this.products.onItemClick =  () => {
      this.card.render({
        title: 'Hello',
        desc: '12345'
      });
    };

  }

  render() {
    this.el.innerHTML = template();
  }


}