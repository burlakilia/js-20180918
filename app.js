import { Products } from './blocks/products/products';
import { ImageWrapper } from "./blocks/image-wrapper/image-wrapper";
import { ProductCard} from "./blocks/product-card/product-card";
import { Search } from "./blocks/search/search";
import { Events, ProductSelectedEventArgs } from "./core/events";
import { Router } from './router';
import { ProductsView } from './views/products/products';
import { OrderView } from './views/order/order';


window.Products = Products;
window.ImageWrapper = ImageWrapper;
window.ProductCard = ProductCard;
window.Search = Search;
window.Events = Events;
window.ProductSelectedEventArgs = ProductSelectedEventArgs;

function start() {
  const router = new Router();
  const productsView = new ProductsView(document.querySelector('.js-products-view'));
  const orderView = new OrderView(document.querySelector('.js-order-view'));

  router.register('products', productsView);
  router.register('orders', orderView);
  
  if (!parent.location.hash)
  {
      parent.location.hash = 'products';
  }
  router.start();
}

window.addEventListener('DOMContentLoaded', start);