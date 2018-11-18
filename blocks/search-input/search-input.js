import { Component } from '../component';
import style from './search-input.scss';

export class SearchInput extends Component {

  constructor(data) {
    super(data);
  }

  render() {

    let { 
      ariaLabel = "Search through catalog", 
      placeHolder = "Search"
      } = this.options;

    this.el.innerHTML = `
      <div class="search-input">
        <input type="search" class="search-input__input-field" aria-label="${ariaLabel}" placeholder="${placeHolder}"></input>
      </div>
    `;

    this.input = this.el.querySelector("input");

    this.input.addEventListener("input", e => fireSearchEvent(this.input));

    function fireSearchEvent(el) {

      let searchEvent = new CustomEvent("search", { detail: el.value, bubbles: true, cancelable: true });
      el.dispatchEvent(searchEvent);
    }
  }
}