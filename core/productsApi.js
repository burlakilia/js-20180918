export class ProductsApi{
    constructor() {
        const host = "https://murmuring-cove-73426.herokuapp.com/";

        const doRequest = function (method, url, onSuccess, onError) {
            const request = new XMLHttpRequest();
            request.open(method, url);
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
        
        this.getProducts = function (onSuccess, onError) {
            doRequest("GET", host + "products", onSuccess, onError);
        };

        this.getProductInfo = function (productId, onSuccess, onError) {
            doRequest("GET", host + "products/" + productId, onSuccess, onError);
        };
    }
}