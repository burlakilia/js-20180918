(function () {
  'use strict';

  class Button {

    constructor({el, options}) {
      this.el = el;
      this.options = options;
    }

    render() {

      this.el.innerHTML = `
        <button class="button">${this.options.text}</button>
      `;

    }

  }

  window.Button = Button;
})();