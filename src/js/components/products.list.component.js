import { ProductsTableService } from "./../services/products.table.service";
import { ClientCartService } from "./../services/client.cart.service";
import { Routing } from "./../core/routing.service";

export class ProductsListComponent {
    constructor() {
        this._productsTableService = new ProductsTableService();
        this._ClientCartService = new ClientCartService();
        this._routing = new Routing();

        this.beforeRender = this.beforeRender.bind(this);
        this.render = this.render.bind(this);
        this.afterRender = this.afterRender.bind(this);
    }

    async beforeRender() {
        this._products = await this._productsTableService.getProducts();

        this.productList = this._products.map(this._productTemplate);
    }

    render() {
        return `
            <div class="card mb-3 container border-0" style="max-width: 1000px;" id="productsList">
                <div class="float-right">
                    <button type="button" class="btn btn-primary" id="cartBtn">View cart</button>
                </div>
                ${this.productList.join('')}
            </div>
        `;
    }

    _productTemplate({
        id,
        name,
        desc,
        img,
        available,
        price
    }) {
        return `
            <div class="row no-gutters mt-1 border rounded">
                <div class="col-md-4">
                    <img style="width: 200px" src="${img}" class="card-img">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${desc}</p>
                        <p class="card-text">Price: ${price}$</p>
                        <div class="float-right" id="${id}">
                            <button type="button" class="btn btn-primary btn-sm my-2" id="addToCart" ${available ? "" : "disabled"} >Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    afterRender() {
        const cartDiv = document.querySelector('#productsList');

        cartDiv.addEventListener('click', async (e) => {
            e.preventDefault();

            if(e.target.id == "cartBtn"){
                this._routing.navigate(`/cart`);
            }

            if(e.target.id == "addToCart"){
                const productToAdd = this._products.find((el) => { 
                    return el.id === e.target.parentElement.id 
                });
                this._ClientCartService.addProductToCart(productToAdd);
            }
        })
    }    
}