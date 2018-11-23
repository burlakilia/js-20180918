import { ArrayAfterSearch } from './arrayAfterSearch.js';

import { Products } from '../../blocks/products/products';
import { ProductCard } from '../../blocks/product-card/product-card';
import { View } from '../view';

import template from '../../blocks/products/products.pug';

export class ProductsView extends View{

  constructor(el) {
    super(el);
    let self = this;
 


    this.arrayAfterSearch = new ArrayAfterSearch({
      el: document.querySelector('.search')
    });


    this.products = new Products({
      el: document.querySelector('.product-container')
    });

    this.card = new ProductCard({
      el: document.querySelector('.product-card')
    });

    this.products.render(
      [{
        type: 'Xbox Products',
        desc: 'Игровая приствка',
        price: 'Unavailable',
        avatar: './images/default.jpg'
      },{
        type: 'Nintendo Swtich',
        desc: 'Гибридная',
        price: 'Unavailable',
        avatar: './images/default.jpg'
      },{
        type: 'Playstation 4',
        desc: 'Игровая',
        price: 'Unavailable',
        avatar: './images/default.jpg'
      }]
    );

  document.addEventListener('click', function (e){
    let item = e.target.closest('.item');
      let selected = document.querySelector('.item-selected');

      if(item) {
        self.card.render({
          item: self.arrayAfterSearch.selected
        });
      }
  });

    this.products.onItemClick =  () => {
      this.card.render({
        title: 'Hello',
        desc: '12345'
      });
    };

  }

}