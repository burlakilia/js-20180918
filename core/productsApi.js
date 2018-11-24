export class ProductsApi{
    // https://murmuring-cove-73426.herokuapp.com/
    constructor() {
        const host = "https://murmuring-cove-73426.herokuapp.com/";
        
        this.getProducts = function (onSuccess, onError) {
            const url = host + "products";
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.onreadystatechange = () => {
                if(request.readyState === 4) {
                    if (request.status === 200) {
                        onSuccess(request.responseText);
                    } else {
                        onError();
                    }
                }
            };
            request.onerror = () => onError();
            request.send();
        };

        this.getProductInfo = function (productId, onSuccess, onError) {
            const url = host + "products/" + productId;
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.onreadystatechange = () => {
                if(request.readyState === 4) {
                    onSuccess(request.responseText);
                } else {
                    onError();
                }
            };

            request.onerror = () => onError();
            request.send();
        };
    }
}