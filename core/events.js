export class Events {
    static get ProductSelected() {
        return 'ProductSelected';
    }
}

export class ProductSelectedEventArgs {
    constructor(productId) {
        this.productId = productId;
    }
}