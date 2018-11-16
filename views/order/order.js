import { View } from '../view';
import template from './order.pug';

export class OrderView extends View {

  constructor(el) {
    super(el);
    this.render();
  }

  render() {
    this.el.innerHTML = template();
  }

}