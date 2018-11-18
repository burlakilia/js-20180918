import { Component } from '../component';
import template from './products.pug';
import {Events, ProductSelectedEventArgs} from '../../core/events'

export class Products extends Component {

  render(data) {
    this.el.innerHTML = template(data);
    const that = this;

      // var myEvent = new CustomEvent(Events.ProductSelected,  {detail: new ProductSelectedEventArgs(randomIntFromInterval(1,3))});
      // this.el.dispatchEvent(myEvent);

      function randomIntFromInterval(min,max) // min and max included
      {
          return Math.floor(Math.random()*(max-min+1)+min);
      }
      this.el.addEventListener('click', () => this.onItemClick(randomIntFromInterval(0, 2)));
  }
  
  onItemClick(itemIndex) {
  }
}
