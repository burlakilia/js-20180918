import { Component } from '../component';
import template from './products.pug';

export class Products extends Component {

  render(data) {
    this.el.innerHTML = template(data);
    const that = this;

    this.el.addEventListener('click', (e) => {
      const id = tryFindProductId(e.srcElement);
      if (id) {
        if (this.onItemClick) {
            this.onItemClick(id);
        }
        // Set active
        setActiveProduct(this.el, id);        
      }
    });
    setActiveProduct(this.el, +data.selectedProductId);
    
    function setActiveProduct(el, selectedId) {
        if (selectedId) {
            for (const itemElem of el.querySelectorAll('.products__item')) {
                itemElem.classList.toggle('products__item_selected', +itemElem.dataset.id === selectedId)
            }
        }
    }
    
    function tryFindProductId(el) {
      if (el.classList.contains('products__item')) {
          return +el.dataset.id;
      }
      if (el.parentElement) {
          return tryFindProductId(el.parentElement);
      }
    }
  }
  
  onItemClick(itemIndex) {
  }
}
