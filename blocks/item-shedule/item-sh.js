(function () {
  'use strict';

class Item {
  constructor({el, options}){
    this.el = el;
    this.type = options.type;
    this.desc = options.desc;
    this.avatar = options.avatar;
    this.price = options.price;
 
  }



  render(){
  let el = this.el;
  let div = document.createElement('div');
  div.innerHTML =  `<div class="item pure-g">
                    <div class="pure-u"></div>
                    <div class="item-body"><h4 class="type"></h4>
                    <p class="description"></p></div>
                    <button class="button">${this.price}</button></div>`;
  el.appendChild(div);
  div.querySelector('.pure-u').innerHTML = `<img  class="avatar">`
  div.querySelector('.avatar').setAttribute('src', this.avatar);
  div.querySelector('.type').innerHTML = this.type;
  
  //onmouseover
  div.addEventListener('mouseover', function (e){
    div.classList.toggle('item-hover');
  })
  //onmouseout
  div.addEventListener('mouseout', function (e){
    div.classList.toggle('item-hover');
  })
  //onclick
  div.querySelector('.item-body').addEventListener('click', function (e){
    let elClick = e.target.closest('.item');

    let selected = document.querySelector('.item-selected');
    if(selected){
      selected.classList.toggle('item-selected');
      console.log(selected);
    };

    elClick.classList.toggle('item-selected');

  })
    //order
  div.querySelector('.button').addEventListener('click', function(e){
    let button = event.target.closest('.button');
    if(button) {
      if(button.innerHTML == 'ordered'){
        button.innerHTML = 'order now';
        button.classList.remove('button-active');
      } else{
        button.innerHTML = 'ordered';
        button.classList.add('button-active');
      }
    }
  })

  // avataar width
  let avatar = div.querySelector('.pure-u');
  avatar.style.width = 70 + 'px'; 


  // destription cutter
    if( el.offsetWidth < 720) {
      let string = this.desc;

      let limitStringLength = 50; // description string length;
      if(string.length > limitStringLength) {

        string = string.slice(0, limitStringLength-3);
        let whiteSpaceNumber = string.lastIndexOf(' ');
        this.desc = string.slice(0, whiteSpaceNumber);
        div.querySelector('.description').innerHTML = this.desc + ' ...';

      }      
      } else {
        div.querySelector('.description').innerHTML = this.desc;  
        
    }
  }

}

  window.Item = Item;
 
})();




