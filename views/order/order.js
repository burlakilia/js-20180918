import template from "./order.pug";
import { View } from "../view";

export class OrderView extends View{

    constructor(el) {

        super(el);
        this.render();
    }

    render() {
        this.el.innerHTML = template();
    }
}