import { Products } from './blocks/products/products';
import { ProductCard } from './blocks/product-card/product-card'
import { Button } from './blocks/button/button';
import { Router } from './router';

import { ProductsView } from './views/products/products';
import { OrderView } from './views/order/order';

window.Button = Button;
window.Products = Products;


function start() {
  
  const router = new Router();
  
 
  const orderView = new OrderView(document.querySelector('.product-card'));
  
  const buttonView  = new Button({
            el: document.querySelector('.flex-conteiner'),
            options: {
            text: 'Заказать'
          	}
          	});

  const productCard = new ProductCard(document.querySelector('.product-card'));

	const productsView = new ProductsView({
	    el: document.querySelector('.product-container'),
	    options: {
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
	    }
	  });


	buttonView.render();
	router.register('products', productsView);
	router.register('orders', orderView);

	router.start();
}

window.addEventListener('DOMContentLoaded', start);

