import { Button } from './blocks/button/button';
import { Products } from './blocks/products/products';
import { ImageWrapper } from "./blocks/imageWrapper/imageWrapper";
import { ProductDescription} from "./blocks/productDescription/productDescription";
import { ProductPrice} from "./blocks/productPrice/productPrice";
import { ProductCard} from "./blocks/productCard/productCard";
import { Main } from "./blocks/main/main";
import {Events, ProductSelectedEventArgs} from "./core/events";
import { Router } from './router';
import { ProductsView } from './views/products/products';
import { OrderView } from './views/order/order';

window.Button = Button;
window.Products = Products;
window.ImageWrapper = ImageWrapper;
window.ProductDescription = ProductDescription;
window.ProductPrice = ProductPrice;
window.ProductCard = ProductCard;
window.Main = Main;

window.Events = Events;
window.ProductSelectedEventArgs = ProductSelectedEventArgs;

function start() {
  const router = new Router();
  const productsView = new ProductsView(document.querySelector('.js-products-view'));
  const orderView = new OrderView(document.querySelector('.js-order-view'));

  router.register('products', productsView);
  router.register('orders', orderView);

  router.start();
}

window.addEventListener('DOMContentLoaded', start);