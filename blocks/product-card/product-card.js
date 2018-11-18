import { Component } from '../component';
import _ from './product-card.scss';
import template from './product-card.pug';
import {ImageWrapper} from "../imageWrapper/imageWrapper";

export class ProductCard extends Component {

    render(data) {
        this.el.innerHTML = template(data);
        const imageElement = this.el.querySelector('.productCard__image');
        const image = new ImageWrapper({ el: imageElement, options: {
            loadingText: 'Загрузка...',
            errorText: 'Ошибка загрузки',
            width: 400,
            height: 300}});

        image.render({
            src: data.imageSrc,
            defaultImgSrc: 'https://via.placeholder.com/400x300.png?text=Default Image',
            loadingText: 'Загрузка...',
            errorText: 'Ошибка загрузки',
            altText: data.title,
            width: 400,
            height: 300
        });
    }

}