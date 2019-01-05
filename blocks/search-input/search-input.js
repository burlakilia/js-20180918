import { Component } from '../component';
import template from './search-input.pug';
import _ from './search-input.scss';

export class SearchInput extends Component {

  constructor(data) {
    super(data);
  }

  render() {

    let { 
      ariaLabel = "Search through catalog", 
      placeHolder = "Search"
      } = this.options;

    this.el.innerHTML = template({
      ariaLabel: ariaLabel,
      placeHolder: placeHolder
    });

    this.input = this.el.querySelector("input");

    this.input.addEventListener("input", e => this.onSearch(this.input.value));
  }

  onSearch(searchString) {}
}