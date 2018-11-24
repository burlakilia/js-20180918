import { Component } from '../component';
import _ from './product-card.scss';
import template from './product-card.pug';
import {ImageWrapper} from "../image-wrapper/image-wrapper";

export class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.el.addEventListener('click', (e) => {
            if (e.srcElement.classList.contains('productCard__button') && this.onPurchaseButtonClick) {
                this.onPurchaseButtonClick();
            }
        })
    }
    
    render(data) {
        this.el.innerHTML = template(data);
        const imageElement = this.el.querySelector('.productCard__image');
        const image = new ImageWrapper({ el: imageElement, options: {
            loadingText: 'Загрузка...',
            errorText: 'Ошибка загрузки'
        }});

        image.render({
            src: data.picture,
            defaultImgSrc: 'https://via.placeholder.com/400x300.png?text=Default Image',
            loadingText: 'Загрузка...',
            errorText: 'Ошибка загрузки',
            altText: data.name
        });
    }

    onPurchaseButtonClick() {
    }
}