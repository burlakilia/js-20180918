import {Products} from '../../blocks/products/products';
import {ProductCard} from '../../blocks/product-card/product-card';
import {View} from '../view';
import _ from './products.scss';
import template from './products.pug';
import {Search} from "../../blocks/search/search";
import {ProductsApi} from "../../core/productsApi";

export class ProductsView extends View {

    constructor(el) {
        super(el);
        this.render();

        this.products = [];
        this.currentProduct = {};

        this.search = new Search({
            el: document.querySelector('.js-search')
        });

        this.productsBlock = new Products({
            el: document.querySelector('.js-products')
        });

        this.card = new ProductCard({
            el: document.querySelector('.js-product-card'),
            options: {}
        });

        this.productsBlock.onItemClick = (guid) => {
            console.log(`Product id=${guid} clicked`);
            this.currentProduct = this.products.find(product => product.guid === guid);
            this.showProductDetails(guid);
            //this.card.render(this.currentProduct);
        };

        this.card.onPurchaseButtonClick = () => {
            console.log('purchase button clicked');
            parent.location.hash = `orders?productId=${this.currentProduct.id}`
        };

        this.search.render({});
        const that = this;
        this.search.onSearch = (query) => {
            console.log(`search for ${query}`);
            const upperQuery = query.toLocaleUpperCase();
            that.productsBlock.render({
                items: that.products.filter(product => product.title.toLocaleUpperCase().indexOf(upperQuery) !== -1),
                selectedProductId: this.currentProduct ? this.currentProduct.guid : undefined
            });
        }

        this.productsApi = new ProductsApi();
        this.productsApi.getProducts((products) => {
            this.products = JSON.parse(products);
            if (this.products.length > 0) {
                this.currentProduct = this.products[0];
            }
            this.productsBlock.render({
                items: this.products,
                selectedProductId: this.currentProduct ? this.currentProduct.guid : undefined
            });
            this.showProductDetails(this.currentProduct ? this.currentProduct.guid : undefined);
        }, () => {
            console.log("Error received!");
        });

        this.showProductDetails = function (guid) {
            this.productsApi.getProductInfo(guid, (data) => {
                const productData = JSON.parse(data);
                this.card.render(productData);
            }, () => {
                console.log("Error received!");
            });
            console.log("Show product details " + guid);
        };
    }

    render() {
        this.el.innerHTML = template();
    }
}

// export class Product {
//     constructor() {
//         this.id = 0;
//         this.title = "";
//         this.description = "";
//         this.price = 0;
//         this.currency = "";
//         this.imageSrc = "";
//     }
// }