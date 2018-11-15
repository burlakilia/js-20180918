import { Component } from '../component';
import template from './main.pug';
import _ from './main.scss';
import {ProductCard} from "../productCard/productCard";

export class Main extends Component {
    constructor(data) {
        super(data);
    }

    render() {
        this.el.innerHTML = template(this.options);
        const items = this.options.items;
        const productCardElement = this.el.querySelector('.main__productCard');
        const productCard = new ProductCard({
            el: productCardElement,
            options: {
                item: items[0]
            }});
        
        productCard.render();
    }
}