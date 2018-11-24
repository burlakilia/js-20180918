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
        
        this.render = function(data) {
            this.el.innerHTML = template(data);
            setActiveProduct(this.el, data.selectedProductId);
        }
        
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
