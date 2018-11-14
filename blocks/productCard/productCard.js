import { Component } from '../component';
import template from './productCard.pug';
import _ from './productCard.scss';
import { ProductDescription } from "../productDescription/productDescription";
import { ProductPrice } from "../productPrice/productPrice";
import { Button} from "../button/button";
import { ImageWrapper } from "../imageWrapper/imageWrapper";

export class ProductCard extends Component {
    constructor(data) {
        super(data);
    }

    render() {
        this.el.innerHTML = template(this.options);
        const item = this.options.item;
        const imageElement = this.el.querySelector('.productCard__image');
        const image = new ImageWrapper({
            el: imageElement,
            options: {
                src: item.imageSrc,
                defaultImgSrc: 'https://via.placeholder.com/400x300.png?text=Default Image',
                loadingText: 'Загрузка...',
                errorText: 'Ошибка загрузки',
                altText: item.title,
                width: 400,
                height: 300
            }});
        
        const buttonElement = this.el.querySelector('.productCard__button');
        const button = new Button({
            el: buttonElement,
            options: {
                text: "Заказать"
            }
        });
        
        const priceElement = this.el.querySelector('.productCard__productPrice');
        const price = new ProductPrice({
            el: priceElement,
            options: {
                price: item.price,
                currency: item.currency
            }
        });
        
        const descriptionElement = this.el.querySelector('.productCard__productDescription');
        const description = new ProductDescription({
            el: descriptionElement,
            options: {
                description: item.description
            }
        });
        
        image.render();
        button.render();
        price.render();
        description.render();
    }
}