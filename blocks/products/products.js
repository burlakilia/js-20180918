import { Component } from '../component';
import template from './products.pug';
import style from './products.scss';

export class Products extends Component {

  constructor(data) {
    super(data);

    this.el.addEventListener('click', () => {
      console.log('21345');
    })
  }

  render() {
    this.el.innerHTML = template(this.options);
  }

}
