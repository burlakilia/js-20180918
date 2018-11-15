import { Component } from '../component';
import template from './main.pug';
import _ from './main.scss';
import {ProductCard} from "../productCard/productCard";
import {Button} from "../button/button";

export class Main extends Component {
    constructor(data) {
        super(data);
    }

    render() {
        this.el.innerHTML = template(this.options);
        const items = this.options.items;

        const productsListElement = this.el.querySelector('.main__products');
        const productsList = new Products({
            el: productsListElement,
            options: {
                items: items
            }
        });

        const productCardElement = this.el.querySelector('.main__productCard');
        let productCard = new ProductCard({
            el: productCardElement,
            options: {
                item: items[0]
            }});
        
        productsListElement.addEventListener(window.Events.ProductSelected, (e) => {
            console.log('Product selected')
            const idx = items.findIndex(item => item.id === e.detail.productId);
            if (idx !== -1) {
                productCard = new ProductCard({
                    el: productCardElement,
                    options: {
                        item: items[idx]
                    }
                });
                productCard.render();
            }
        });
        
        productsList.render();
        productCard.render();
    }
}