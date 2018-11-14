import { Component } from '../component';
import template from './productDescription.pug';
import _ from './productDescription.scss';

export class ProductDescription extends Component {
    constructor(data) {
        super(data);
    }

    render() {
        this.el.innerHTML = template(this.options);
    }
}