import {Component} from '../component';
import template from './products.pug';

export class Products extends Component {
    constructor(el, options) {
        super(el, options);
        let _clickAdded;
        this.getClickAdded = () => _clickAdded;
        this.setClickAdded = (added) => _clickAdded = added;
    }
    
    render(data) {
        this.el.innerHTML = template(data);
        const that = this;
        if (!this.getClickAdded()) {
            this.setClickAdded(true);
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
            this.clickAdded = true;
        }
        setActiveProduct(this.el, data.selectedProductId);

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
