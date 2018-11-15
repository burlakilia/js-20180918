import { Component } from '../component';
import _ from './button.scss';
import template from "../button/button.pug";

export class Button extends Component {

  constructor(data) {
    super(data)
  }

  render() {
      this.el.innerHTML = template(this.options);
  }
}
