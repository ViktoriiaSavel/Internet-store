import { AddProductComponent } from "./components/add.product.component"
import { ProductsListComponent } from "./components/products.list.component";
import { ProductsTableComponent } from "./components/products.table.component";
import { NotFoundComponent } from "./components/notfound.component";
import { NavbarComponent } from "./components/navbar.component";
import { ClientCartComponent } from "./components/client.cart.component";

import { ActiveRoute } from "./core/active.routing.service";

const activeRoute = new ActiveRoute();

const routes = {
    '/productstable': new ProductsTableComponent(),
    '/addproduct': new AddProductComponent(),
    '/addproduct/:id': new AddProductComponent(),
    '/productslist': new ProductsListComponent(),
    '/cart': new ClientCartComponent(),
    '**': new NotFoundComponent()
}

const router = async() => {

    const header = document.querySelector('app-header');
    const container = document.querySelector('app-container');

    const request = activeRoute.parseRequestUrl();
    const url = `${request.resource ? "/" + request.resource : "/"}${
        request.id ? "/:id" : ""
      }`;

    const component = routes[url] || routes['**'];

    if (header) {
        const { render, afterRender } = new NavbarComponent();
        header.innerHTML = render();
        afterRender();
    }

    const {
        beforeRender,
        render,
        afterRender
    } = component;

    beforeRender && await beforeRender(request.id);
    container.innerHTML = render();
    afterRender && await afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);