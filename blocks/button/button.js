import { Component } from '../component';
import _ from './button.scss';
import __ from '../product-card/product-card.pug'

export class Button extends Component {

  constructor(data) {
    super(data)
  }

  render() {

    this.el.innerHTML = `
      <button class="button button_inactive">1234 ${this.options.text}</button>
    `;

  }

}
