import {
    NavigationComponent
} from './components/navigation.component';
import {
    AddProductComponent
} from './components/add.product.component';
import {
    ProductsListComponent
} from './components/products.list.component';
import {
    ProductsTableComponent
} from './components/products.table.component';
import {
    NotFoundComponent
} from './components/notfound.component';

const routes = {
    '/productstable': new ProductsTableComponent(),
    '/addproduct': new AddProductComponent(),
    '/productslist': new ProductsListComponent(),
    '**': new NotFoundComponent()
}

const router = async() => {
    const url = location.hash.slice(1).toLowerCase();
    const container = document.querySelector('app-container');

    const component = routes[url] || routes['**'];

    const {
        beforeRender,
        render,
        afterRender
    } = component;

    beforeRender && await beforeRender();
    container.innerHTML = render();
    afterRender && await afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);