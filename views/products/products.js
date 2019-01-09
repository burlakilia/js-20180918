import { Products } from "../../blocks/products/products";
import { ProductCard } from "../../blocks/product-card/product-card";
import template from "./products.pug";
import { View } from "../view";
import { SearchInput } from "../../blocks/search-input/search-input";

export class ProductsView extends View {

    constructor(el, productsData) {

        super(el);
        productsData = productsData || [];

        this.render();

        this.search = new SearchInput({
            el: this.el.querySelector('.js-search') 
        })

        this.products = new Products({
            el: this.el.querySelector('.js-products') 
        });

        this.card = new ProductCard({
                el: this.el.querySelector('.js-product-card')
            });

        this.search.render();

        this.search.onSearch = searchString => { console.log(searchString); };

        this.products.render(productsData);

        this.products.onItemClick = productId => {
            this.card.render(productsData.filter(product => product.guid === productId)[0]);
        };

        if (productsData[0])
        {
            this.products.select(productsData[0].guid);
        }
        else
        {
            this.card.render({
                guid: "5bf82af5dc258c5e3e642067",
                picture: "https://picsum.photos/200/300?image=100",
                title: "nisi ut",
                description: "12345",
                price: "$99.99"
            });
        }
    }

    render() {
        this.el.innerHTML = template();
    }
}