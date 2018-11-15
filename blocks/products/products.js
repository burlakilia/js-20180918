import { Component } from '../component';
import template from './products.pug';
import {Events, ProductSelectedEventArgs} from '../../core/events'

export class Products extends Component {

  constructor(data) {
    super(data);
    
    let el = this.el;
    this.el.addEventListener('click', () => {
      console.log('21345');
        var rnd = Math.random() * 3;
        var myEvent = new CustomEvent(Events.ProductSelected,  {detail: new ProductSelectedEventArgs(randomIntFromInterval(1,3))});
        el.dispatchEvent(myEvent);
    })

    function randomIntFromInterval(min,max) // min and max included
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }    
  }

  render() {
    this.el.innerHTML = template(this.options);
  }

}
