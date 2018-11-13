(function () {
    'use strict';

    class ImageWrapper {

        constructor({el, options}) {
            this.el = el;
            this.options = options;
        }

        render() {

            this.el.innerHTML = `
        <div class="imageWrapper-container">
            <div class="imageWrapper-loadingText">
            </div>
            <img class="imageWrapper hidden"></img>
        </div>
      `;
            const loadingDivElement = this.el.querySelector("div.imageWrapper-loadingText");
            this.showText(loadingDivElement, this.options.loadingText);

            const imageElement = this.el.querySelector("img.imageWrapper");
            imageElement.setAttribute('alt', this.options.altText);
            imageElement.setAttribute('width', this.options.width);
            imageElement.setAttribute('height', this.options.height);
            this.hideElement(imageElement, true);
            
            // Картинка загрузилась - убираем текст, показываем картинку
            imageElement.addEventListener('load', () => {
                this.hideElement(loadingDivElement, true);
                this.hideElement(imageElement, false);
            });
            imageElement.src = this.options.src;

            // Если не загрузилось, пробуем загрузить картинку по умолчанию. Не загрузилась и она - показываем текст ошибки
            let fallBackCall = false;
            imageElement.addEventListener('error', () => {
                if (fallBackCall) {
                    this.showText(loadingDivElement, this.options.errorText);
                    this.hideElement(imageElement, true);
                    return;
                }
                fallBackCall = true;
                this.showText(imageElement, this.options.loadingText);
                imageElement.src = this.options.defaultImgSrc;
            })
        }
        
        showText(el, text) {
            this.hideElement(el, false);
            el.innerHTML = text;
        }
        
        hideElement(el, isHidden) {
            el.classList.toggle('hidden', isHidden);
        }
    }

    window.ImageWrapper = ImageWrapper;
})();