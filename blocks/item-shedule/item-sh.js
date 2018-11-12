window.addEventListener('DOMContentLoaded', function () {
for (let i = 0; i < options.length; i++){  
  let optionsElement = options[i];
  let item = new Item({el: document.querySelector('.product-container'), optionsElement});

  item.render();
}

});



(function () {
  'use strict';

class Item {
  constructor({el, optionsElement}){
    this.el = el;
    this.type = optionsElement.type;
    this.desc = optionsElement.desc;
    this.avatar = optionsElement.avatar;
    this.price = optionsElement.price;
    this.cond = optionsElement.condition;
 
  }



  render(){
  let el = this.el;
  let li = document.createElement('li');
  li.innerHTML =  `<div class="item pure-g">
                    <div class="pure-u"></div>
                    <div class="item-body"><h4 class="type"></h4>
                    <p class="description"></p></div>
                    <button class="button">${this.price}</button></div>`;
  el.appendChild(li);
  li.querySelector('.pure-u').innerHTML = `<img  class="avatar">`
  li.querySelector('.avatar').setAttribute('src', this.avatar);
  li.querySelector('.type').innerHTML = this.type;
  
  //onmouseover
  li.addEventListener('mouseover', function (e){
    li.classList.toggle('item-hover');
  })
  //onmouseout
  li.addEventListener('mouseout', function (e){
    li.classList.toggle('item-hover');
  })
  //onclick
  li.querySelector('.item-body').addEventListener('click', function (e){
    let elClick = e.target.closest('.item');

    let selected = document.querySelector('.item-selected');
    if(selected){
      selected.classList.toggle('item-selected');
      console.log(selected);
    };

    elClick.classList.toggle('item-selected');

  })
    //order
  let price  = this.price;
  li.querySelector('.button').addEventListener('click', function(e){
    let button = event.target.closest('.button');
    if(button) {
      if(button.innerHTML == 'ordered'){

        button.innerHTML = price;
        button.classList.remove('button-active');
      } else{
        button.innerHTML = 'ordered';
        button.classList.add('button-active');
      }
    }
  })

  // avataar width
  let avatar = li.querySelector('.pure-u');
  avatar.style.width = 70 + 'px'; 


  // destription cutter
    let elWidth = el.offsetWidth;
    if( el.offsetWidth < 720) {
      let string = this.desc;

      let limitStringLength = elWidth/6; // description string length;
      if(string.length > limitStringLength) {

        string = string.slice(0, limitStringLength-3);
        let whiteSpaceNumber = string.lastIndexOf(' ');
        this.desc = string.slice(0, whiteSpaceNumber);
        li.querySelector('.description').innerHTML = this.desc + ' ...';

      }      
      } else {
        li.querySelector('.description').innerHTML = this.desc;  
        
    }
  }

}

  window.Item = Item;
 
})();




