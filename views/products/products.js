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
        this.currentProductGuid = undefined;

        this.search = new Search({
            el: document.querySelector('.js-search')
        });
        this.search.render({});

        this.productsBlock = new Products({
            el: document.querySelector('.js-products')
        });

        this.card = new ProductCard({
            el: document.querySelector('.js-product-card'),
            options: {}
        });
        this.card.render(undefined);

        this.productsBlock.onItemClick = (guid) => {
            console.log(`Product id=${guid} clicked`);
            this.currentProductGuid = guid;
            this.showProductDetails(guid);
        };

        this.card.onPurchaseButtonClick = () => {
            console.log('purchase button clicked');
            parent.location.hash = `orders?productId=${this.currentProductGuid}`
        };

        const that = this;
        this.search.onSearch = (query) => {
            console.log(`search for ${query}`);
            const upperQuery = query.toLocaleUpperCase();
            that.productsBlock.render({
                items: that.products.filter(product => product.title.toLocaleUpperCase().indexOf(upperQuery) !== -1),
                selectedProductId: this.currentProductGuid
            });
        };

        this.productsApi = new ProductsApi();
        this.productsApi.getProducts((products) => {
            this.products = JSON.parse(products);
            this.currentProductGuid = this.products.length > 0 ? this.products[0].guid : undefined;
            this.productsBlock.render({
                items: this.products,
                selectedProductId: this.currentProductGuid
            });
            this.showProductDetails(this.currentProductGuid);
        }, () => {
            console.log("Error received!");
        });

        // Show product card details.
        this.showProductDetails = function (guid) {
            if (guid) {
                this.productsApi.getProductInfo(guid, (data) => {
                    const productData = JSON.parse(data);
                    this.card.render(productData);
                }, () => {
                    console.log("Error received!");
                    this.card.render(undefined);
                });
            } else {
                this.card.render(undefined);
            }
        };
    }

    render() {
        this.el.innerHTML = template();
    }
}
