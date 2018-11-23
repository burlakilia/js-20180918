import { DataArray } from '../../array.js';
import template from '../products/products.pug';

export class Search {
  constructor() {

};
render() {
      this.dataArray = new DataArray;
      let dArray = this.dataArray.options;
      let input = document.querySelector('.search');
      let arrayAfterSearch = [];
      let arrayAfterSearch2 = [];   
      let self = this;

      input.addEventListener('input', function getChar(e) {

      arrayAfterSearch.length = '';

      for (let i = 0; i < dArray.length; i++){
          let value = input.value;
          value = value.toLowerCase();

        let searchWord = dArray[i].type;

        let re = new RegExp('^'+value+' +| +'+value+' +| +'+value+'$', 'i'); 
        let ff = re.test(searchWord); 

        if(ff) {
          arrayAfterSearch.push(dArray[i]);

        } 
      };
        if(arrayAfterSearch.length) {

        arrayAfterSearch2 = arrayAfterSearch.slice();
        
        let div = document.querySelector('div.product-container');
        div.innerHTML = template(arrayAfterSearch2);

        input.placeholder = 'insert sth new';

        self.newArray = arrayAfterSearch2;
        }




      });
};

animation() {
      
      let self = this;

  //onmouseover

      document.addEventListener('mouseover', function (e){
      let elClick = e.target.closest('li');
        if(elClick){
             elClick.classList.toggle('item-hover');   
        }
      });

  //onmouseout

      document.addEventListener('mouseout', function (e){
        let elClick = e.target.closest('li');
        if(elClick){
               elClick.classList.toggle('item-hover');   
        }
      });

  //onclick

      document.addEventListener('click', function (e){
      let item = e.target.closest('.item');
      let selected = document.querySelector('.item-selected');

      if(item){

      if(selected){
        selected.classList.toggle('item-selected');
        console.log(selected);
      };

      item.classList.toggle('item-selected');

      }

      });

  //order

      document.addEventListener('click', function (e){
        

        let button = event.target.closest('.button-order');

        if(button){

        let array = self.newArray;
        console.log(array);
        
        let item = button.closest('.item');
        
            if(button.innerHTML == 'ordered'){

              button.innerHTML =  array[item.dataset.number].price;
              button.classList.remove('button-order-active');
            } else{
            button.innerHTML = 'ordered';
            button.classList.add('button-order-active');
            }
        };


        
      });









}

};


