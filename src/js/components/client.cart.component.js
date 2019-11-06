import { ClientCartService } from "./../services/client.cart.service";

export class ClientCartComponent {
    constructor() {
        this._ClientCartService = new ClientCartService();
        this.beforeRender = this.beforeRender.bind(this);
        this.render = this.render.bind(this);
        this.afterRender = this.afterRender.bind(this);
    }

    beforeRender() {
        this._cart = this._ClientCartService.getCart();
        this.productList = this._cart.map(this._productTemplate);
    }

    render() {
        if (this.productList.length > 0) {
            return `
                <div class="card mb-3 container border-0" style="max-width: 1000px;" id="productsInCartList">
                    ${this.productList.join('')}
                </div>
        `
        } else {
            return `
                <div class="alert alert-dark container" role="alert">
                    Your cart is empty! 
                </div>
            `
        }
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
                    <img style="width: 200px" src="${img}" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${desc}</p>
                        <p class="card-text">Price: ${price}$</p>
                        <div class="float-right" id="${id}">
                            <button type="button" class="btn btn-primary btn-sm" id="removeFromCart">Remove from cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    afterRender() {
        const cartDiv = document.querySelector('#productsInCartList');

        if (cartDiv) {
            cartDiv.addEventListener('click', async (e) => {
            e.preventDefault();

            if(e.target.id == "removeFromCart"){
                this._ClientCartService.deleteProductFromCart(e.target.parentElement.id);
                window.location.reload();
            }
            })
        }
        
    }  
}