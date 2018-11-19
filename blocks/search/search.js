import { Component } from '../component';
import _ from './search.scss';
import template from './search.pug';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.el.addEventListener('click', (e) => {
            const inputElement = this.el.querySelector('.search__input');
            if (inputElement && e.srcElement.classList.contains('search__button') && this.onSearch) {
                this.onSearch(inputElement.value);
            }
        })
    }
    
    render(data) {
        this.el.innerHTML = template(data);
    }

    onSearch(queryString) {
    }
}