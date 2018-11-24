import { Component } from '../component';
import _ from './product-card.scss';
import template from './product-card.pug';
import { ArrayAfterSearch } from '../../views/products/arrayAfterSearch.js';
export class ProductCard extends Component {

  render(data) {
    this.el.innerHTML = template(data);
  }

}