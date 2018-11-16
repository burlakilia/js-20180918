import { Component } from '../component';
import template from './products.pug';

export class Products extends Component {

  constructor(data) {
    super(data);

    this.el.addEventListener('click', () => {
      this.onItemClick();
    });
  }

  render(data) {
    this.el.innerHTML = template(data);
  }

  onItemClick() {}
}
