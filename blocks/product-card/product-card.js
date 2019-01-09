import { Component } from '../component';
import template from './product-card.pug';
import _ from './product-card.scss';

export class ProductCard extends Component {

  constructor(data) {
    super(data);
  }

  render(data) {

    this.el.innerHTML = template(data);

  }

}