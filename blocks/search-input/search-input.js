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

    let throttledSearchFunc = SearchInput._throttle(this._onSearch, 1000);
    this.input.addEventListener("input", e => throttledSearchFunc.call(this, this.input.value));
  }

  onSearch(searchString) { }

  _onSearch(searchString) {
    this.onSearch(searchString);
  }

  static _throttle(func, timeout) {

    let isThrottled = false;
    let _args;
    let _this;
  
    return function _throttledFunction() {

      if (isThrottled) { 
        _args = arguments;
        _this = this;
        return;
      }
  
      func.apply(this, arguments);
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false;
        if (_this) {
          _throttledFunction.apply(_this, _args);
          _args = _this = null;
        }
      }, timeout);
    };
  }
}