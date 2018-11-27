import {Component} from '../component';
import template from './products.pug';

export class Products extends Component {
    constructor(el, options) {
        super(el, options);

        this.el.addEventListener('click', (e) => {
            const guid = tryFindProductGuid(e.srcElement);
            if (guid) {
                if (this.onItemClick) {
                    this.onItemClick(guid);
                }
                // Set active
                setActiveProduct(this.el, guid);
            }
        });

        this._render = function(data) {
            this.el.innerHTML = template(data);
            setActiveProduct(this.el, data.selectedProductId);
        }

        this.render = throttle(this._render, 250);

        function setActiveProduct(el, selectedGuid) {
            if (selectedGuid) {
                for (const itemElem of el.querySelectorAll('.products__item')) {
                    itemElem.classList.toggle('products__item_selected', itemElem.dataset.guid === selectedGuid)
                }
            }
        }

        function tryFindProductGuid(el) {
            if (el.classList.contains('products__item')) {
                return '' + el.dataset.guid;
            }
            if (el.parentElement) {
                return tryFindProductGuid(el.parentElement);
            }
        }
    }

    onItemClick(itemIndex) {
    }
}

function throttle(callback, time) {
  let wait = false;
  let lastCall = {};

  return function () {
      if (!wait) {
          callback.apply(this, arguments);

          wait = true;
          lastCall = {};

          setTimeout(() => {
              if (Object.keys(lastCall).length > 0) {
                callback.apply(this, lastCall);
                lastCall = {};
              }

              wait = false;

          }, time);

      } else {

        lastCall = arguments;

      }
  }
}
