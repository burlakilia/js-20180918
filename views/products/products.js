import { Products } from '../../blocks/products/products';
import { ProductCard } from '../../blocks/product-card/product-card';
import { View } from '../view';
import _ from './products.scss';
import template from './products.pug';
import {Search} from "../../blocks/search/search";

export class ProductsView extends View{

  constructor(el) {
    super(el);
    this.render();
    
    // TODO: improve that
    this.products = [
        {
            id: 1,
            title: "Смартфон iPhone X",
            description: "Смартфон Apple iPhone X – воплощение статуса, надежности и передовых технологий. Большой, 5.8-дюймовый безрамочный экран дарит удивительно четкое и живое изображение (разрешение 2436x1125). Привычный поклонникам бренда интерфейс здесь дополнен такими возможностями, как бесконтактная оплата и зарядка, поддержка максимального количества диапазонов LTE.\n" +
                "Камера Apple iPhone X стала 12-мегапиксельной, двойной, с 6-элементной линзой. Она позволяет снимать видео формата от HD до Ultra HD 4K и фото с разрешением 4032x3024. Дополнительные технологии улучшения качества, такие как расширенный цветовой диапазон, шумоподавление, улучшенный алгоритм местной тональной компрессии делают полученный материал безупречным. Творческие режимы, панорамная съемка, возможность фокусировки касанием, следящий автофокус позволяют максимально точно передать настроение, расставить нужные акценты и сделать это быстро и легко.\n",
            price: 72999,
            currency: "р",
            imageSrc: "https://c.dns-shop.ru/thumb/st4/fit/0/0/78839676ded0963fe3b743ca73800d84/817a9606bd42fd2a7770bb7569310f9aededd44ecd5fa95a616b23d446b85fa2.jpg"
        },
        {
            id: 2,
            title: '13.3" Ноутбук DELL XPS 13 9360',
            description: "Ноутбук Dell XPS 13 отличается очень малыми размерами и небольшой массой. В нем используется технология Infinity Edge, которая позволяет уменьшить до минимума толщину рамок дисплея, сосредоточив внимание пользователя на изображении.",
            price: 84999,
            currency: "р",
            imageSrc: "https://c.dns-shop.ru/thumb/st1/fit/0/0/b19f4545c28810d1c716cb6bd4f87d6d/34cc23a0a140cd668f77507ea51851bd42f36b1d46d4d62cf983664d68670e8c.jpg"
        },
        {
            id: 3,
            title: "Микроволновая печь LG MW23W35GIB черный",
            description: "Микроволновая печь LG MW23W35GIB представлена в строгом дизайне и имеет немаркую черную расцветку, которая будет привлекать еще больше внимание к этому прибору на кухне. Оборудование обладает мощностью микроволн 1000 Вт, что обеспечивает равномерный и быстрый прогрев продуктов. Устройство весит 9.4 кг и обладает габаритами 47.6х27.2х34.6 см.\n" +
                "Модель LG MW23W35GIB вмещает 23 л и дополняется удобным поддоном с диаметром 29.2 см. Стенки внутренней камеры покрыты специальной эмалью, обеспечивающей простоту очистки даже самых сложных загрязнений. Оборудование оснащено 22 автоматическими программами, функциями разморозки и подогрева, а также блокировкой от детей. Печь дополнена сенсорным управлением и удобным дисплеем с часами.",
            price: 7999,
            currency: "р",
            imageSrc: "https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1096/e63570fd14b4ec2ba8a37181523eb4d3/75678853726240f32bc4bf022fae02bafe4356b9ef4f249049f669a743b089da.jpg"
        },
        {
            id: 4,
            title: "Часы настенные Centek СТ-7103",
            description: "Centek СТ-7103 настенные часы с надежным колебательным кварцевым механизмом. Долгая работа без подзавода.",
            price: 199,
            currency: "р",
            imageSrc: "https://c.dns-shop.ru/thumb/st1/fit/wm/1996/2000/3de41e3a0faef1213fe6300069c460a8/a55d77751bddbc6cc9cc3e414208bd1dc328e88fa8b81ffc11ec575e95ef3ea6.jpg"
        }
    ];
    
    this.currentProduct = this.products[0];

    this.search = new Search({
        el: document.querySelector('.js-search')
    });
    
    this.productsBlock = new Products({
      el: document.querySelector('.js-products')
    });

    this.card = new ProductCard({
      el: document.querySelector('.js-product-card'),
        options: {
          
        }
    });

    this.productsBlock.render({items: this.products});
    this.productsBlock.onItemClick = (id) => {
        console.log(`Product id=${id} clicked`);
        this.currentProduct = this.products.find(product => product.id === +id);
        this.card.render(this.currentProduct);
    };

    this.card.render(this.currentProduct);
    this.card.onPurchaseButtonClick = () => {
        console.log('purchase button clicked');
        parent.location.hash = `orders?productId=${this.currentProduct.id}`
    };
    
    this.search.render({});
    const that = this;
    this.search.onSearch = (query ) => {
        console.log(`search for ${query}`);
        const upperQuery = query.toLocaleUpperCase();
        that.productsBlock.render({items: that.products.filter(product => product.title.toLocaleUpperCase().indexOf(upperQuery) !== -1)});
    }
  }

  render() {
    this.el.innerHTML = template();
  }
}

// export class Product {
//     constructor() {
//         this.id = 0;
//         this.title = "";
//         this.description = "";
//         this.price = 0;
//         this.currency = "";
//         this.imageSrc = "";
//     }
// }