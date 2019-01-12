import { View } from "../view";
import template from "./loader.pug";
import _ from "./loader.scss";

export class LoaderView extends View {

    constructor(el) {

        super(el);
        
        this.render();
    }

    render() {
        this.el.innerHTML = template();
    }
}