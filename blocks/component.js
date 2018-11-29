export class Component {

  constructor({el, options}) {
    this.el = el;
    this.options = options;
  }

  throttle(callback, time) {
    let wait = false;
    let lastCall = {};

    return function () {
        if (!wait) {
            callback.apply(this, arguments);

            wait = true;
            lastCall = {};
            console.log('products updated');

            setTimeout(() => {
                wait = false;

                if (Object.keys(lastCall).length > 0) {
                  callback.apply(this, lastCall);
                  lastCall = {};
                  console.log('products updated');
                }

            }, time);

        } else {

          lastCall = arguments;

        }
    }
  }

}
