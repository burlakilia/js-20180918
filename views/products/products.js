import { Products } from "../../blocks/products/products";
import { ProductCard } from "../../blocks/product-card/product-card";
import template from "./products.pug";
import { View } from "../view";

export class ProductsView extends View {

    constructor(el) {

        super(el);
        this.render();

        this.products = new Products({
            el: document.querySelector('.js-products') 
        });

        this.card = new ProductCard({
                el: document.querySelector('.js-product-card')
            });

        this.products.render({
            title: "Китайские товары",
            products: [{ 
              name: "Фонарь HardWay", 
              picture: "http://img.desktopwallpapers.ru/animals/pics/wide/1920x1200/dedfafbda01d0f6cf8a056b10b74f54c.jpg", 
              price: "$100", 
              comment: "Для тех, кто не любит простых путей!", 
              description : "Для тех, кто не любит простых путей! Кнопка включения утоплена в корпус, чтобы ее можно было нажать только мизиньчиком. Батарейки можно засунуть в батарейный отсек, но чтобы вынуть, фонарь придется разобрать. После включения светит, если потрясти." 
            }, { 
              name: "Триногие брюки", 
              picture: "http://img.desktopwallpapers.ru/animals/pics/wide/1920x1200/dedfafbda01d0f6cf8a056b10b74f54c.jpg", 
              price: "$300", 
              comment: "Три штанины по цене двух", 
              description: "Вы родились в Чернобыле? Не беда, для вас триногие брюки. Подходит и не только для мутантов. Третью штанину можно использовать прозапас - на случай если одна из двух порвется." 
            }, { 
              name: "Инновационная поилка-тренажер", 
              picture: "http://img.desktopwallpapers.ru/animals/pics/wide/1920x1200/dedfafbda01d0f6cf8a056b10b74f54c.jpg", 
              price: "$40", 
              comment: "С интегрированной соломинкой", 
              description : "Объем 0.5л, имеет интегрированную соломинку. Вода через последнюю идет с трудом, не говоря уже о смузи, так что ваш рот упражняется, высасывая содержимое. Позволяет убрать тройной подбородок." 
            }, { 
              name: "Гирлянда-угадайка", 
              picture: "http://img.desktopwallpapers.ru/animals/pics/wide/1920x1200/dedfafbda01d0f6cf8a056b10b74f54c.jpg", 
              price: "$65.50", 
              comment: "Нельзя предсказать какого цвета будут огни", 
              description : "Нельзя предсказать какого цвета будут огни." 
            }]
          });

        this.card.render({
            title: 'Hello',
            desc: 'world'
        });

        this.products.onItemClick = () => {
            this.card.render({
                title: 'Hello',
                desc: '12345'
            });
        };
    }

    render() {
        this.el.innerHTML = template();
    }
}