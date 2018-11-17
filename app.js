import { Button } from './blocks/button/button';
import { Products } from './blocks/products/products';
import { Router } from './router';
import { ProductsView } from './views/products/products';
import { OrderView } from './views/order/order';

window.Button = Button;
window.Products = Products;


function start() {
  const router = new Router();
  const productsView = new ProductsView(document.querySelector('.js-products-view'));
  const orderView = new OrderView(document.querySelector('.js-order-view'));

  router.register('products', productsView);
  router.register('orders', orderView);

  router.start();
}

window.addEventListener('DOMContentLoaded', start);

