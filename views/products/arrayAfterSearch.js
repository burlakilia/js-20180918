import { Search } from '../../blocks/search/search.js';


export class ArrayAfterSearch {
	constructor(options) {
		this.input = options.el;
		this.options = options;
		let self = this;

		this.search = new Search();
		
		this.search.animation();

    this.input.addEventListener('input', function indexedProducts(event) {

			self.search.render({
	      el: document.querySelector('ul.product-container')
	    });

     	});


  // selected item to product-card

    document.addEventListener('click', function (e){
      let item = e.target.closest('.item');
      let button = e.target.closest('.button-order');

      if(item && !button) {
      let array = self.search.newArray;
      self.selected = array[item.dataset.number];
      }

     });






   }

}