import { Component } from '../component';
import template from './image-wrapper.pug';
import _ from './image-wrapper.scss';

export class ImageWrapper extends Component {

    render(data) {
        this.el.innerHTML = template(data);
        const textElement = this.el.querySelector(".imageWrapper__imageText");
        textElement.setAttribute('width', this.options.width || '');
        textElement.setAttribute('height', this.options.height || '');
        
        const imageElement = this.el.querySelector(".imageWrapper__image");
        imageElement.setAttribute('alt', data.altText);
        imageElement.setAttribute('width', this.options.width || '');
        imageElement.setAttribute('height', this.options.height || '');

        function showTextOrImage(needShowText, text) {
            imageElement.classList.toggle("imageWrapper__image__hidden", needShowText);
            textElement.classList.toggle("imageWrapper__imageText__hidden", needShowText === false);
            textElement.innerHTML = needShowText ? text : '';
        }
        
        showTextOrImage(true, this.options.loadingText);
        // Картинка загрузилась - убираем текст, показываем картинку
        imageElement.addEventListener('load', () => {
            //window.setTimeout(() => showTextOrImage(false), 5000);
            showTextOrImage(false);
        });
        imageElement.src = data.src;

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