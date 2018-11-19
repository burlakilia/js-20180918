import { Component } from '../component';
import template from './products.pug';

export class Products extends Component {

  render(data) {
    this.el.innerHTML = template(data);
    const that = this;

    this.el.addEventListener('click', (e) => {
      if (!this.onItemClick) {
          return;
      }
      const id = tryFindProductId(e.srcElement);
      if (id){
        this.onItemClick(id);
      }
    });
    
    function tryFindProductId(el) {
      if (el.classList.contains('products__item')) {
          const ids = el.id.split('-');
          if (ids && ids.length > 1)
          {
              return ids[1];
          }
          return;
      }
      if (el.parentElement) {
          return tryFindProductId(el.parentElement);
      }
    }
  }
  
  onItemClick(itemIndex) {
  }
}
