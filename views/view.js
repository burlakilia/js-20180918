export class View {

    constructor(el) {
        this.el = el;
    }

    show() {
        this.el.hidden = false;
    }

    hide() {
        this.el.hidden = true;
    }   
}