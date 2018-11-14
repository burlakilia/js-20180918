import { Component } from '../component';
import template from './imageWrapper.pug';
import _ from './imageWrapper.scss';

export class ImageWrapper extends Component {

    constructor(data) {
        super(data);
    }

    render() {
        this.el.innerHTML = template(this.options);

        const textElement = this.el.querySelector(".imageWrapper__imageText");
        const imageElement = this.el.querySelector(".imageWrapper__image");
        imageElement.setAttribute('alt', this.options.altText);
        imageElement.setAttribute('width', this.options.width);
        imageElement.setAttribute('height', this.options.height);

        function showTextOrImage(needShowText, text) {
            imageElement.classList.toggle("imageWrapper__image__hidden", needShowText);
            textElement.classList.toggle("imageWrapper__imageText__hidden", needShowText === false);
            textElement.innerHTML = needShowText ? text : '';
        }
        
        showTextOrImage(true, this.options.loadingText);
        // Картинка загрузилась - убираем текст, показываем картинку
        imageElement.addEventListener('load', () => {
            showTextOrImage(false);
        });
        imageElement.src = this.options.src;

        // Если не загрузилось, пробуем загрузить картинку по умолчанию. Не загрузилась и она - показываем текст ошибки
        let fallBackCall = false;
        imageElement.addEventListener('error', () => {
            if (fallBackCall) {
                showTextOrImage(true, this.options.errorText);
                return;
            }
            fallBackCall = true;
            showTextOrImage(true, this.options.loadingText);
            imageElement.src = this.options.defaultImgSrc;
        })
    }
}