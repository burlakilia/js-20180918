import { Component } from '../component';
import template from './productPrice.pug';
import _ from './productPrice.scss';

export class ProductPrice extends Component {
    constructor(data) {
        super(data);
    }

    render() {
        this.el.innerHTML = template(this.options);
    }
}