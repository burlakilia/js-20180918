import { Component } from '../component';
import template from './product-card.pug';
import _ from './product-card.scss';
import { ImageHelper } from '../image-helper';

export class ProductCard extends Component {

  constructor(data) {
    super(data);
  }

  render(data) {

    data.buttonText = data.buttonText || "Order";
    this.el.innerHTML = template(data);

    ImageHelper.replaceImages();
  }

}