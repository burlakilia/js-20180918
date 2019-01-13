import { Products } from './blocks/products/products';
import { SearchInput } from './blocks/search-input/search-input';
import { ProductCard } from './blocks/product-card/product-card';
import { Router } from './router';

import { ProductsView } from './views/products/products';
import { OrderView } from './views/order/order';
import { LoaderView } from './views/loader/loader';

window.Products = Products;
window.ProductCard = ProductCard;
window.SearchInput = SearchInput;

const startPage = "products";

function start(products) {

    if (!window.location.hash)
    {
        window.location.hash = startPage;
    }

    const productsView = new ProductsView(document.querySelector(".js-products-view"), products);
    const orderView = new OrderView(document.querySelector(".js-order-view"));

    const router = new Router();
    router.register("products", productsView);
    router.register("orders", orderView);

    router.start();
}

function queryProducts() {
  
    let loaderView = new LoaderView(document.querySelector(".js-loader-view"));
    loaderView.show();

    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
    //1 - открыт
    //2 - отправлен заголовок запроса
    //3 - начал получать ответ
    //4 - ответ от сервера
        if (request.readyState != 4) return;
        
        loaderView.hide();
        if (request.status == 200) {
            let products;
            try
            {
                products = JSON.parse(request.responseText);
            }
            catch(e) 
            {
                alert(e.message);
            }

            products.forEach(product => {
                product.description = description;
                product.price = "$" + (Math.random() * 100).toFixed(2);
            });
            start(products);
        }
        else
        {
            alert(requesr.status + ":" + request.statusText);
        }
    });

    request.open('GET', 'https://murmuring-cove-73426.herokuapp.com/products/?limit=5&offset=5&filter=nisi', true);
    request.send();
}

window.addEventListener("DOMContentLoaded", queryProducts);

const description = "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, \
totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. \
Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, \
qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, \
adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. \
Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi \
consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel \
illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, \
qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati \
cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. \
Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque \
nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. \
Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae \
sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus \
maiores alias consequatur aut perferendis doloribus asperiores repellat.";