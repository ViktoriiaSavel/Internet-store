export class ClientCartService {
    constructor() {
        this.cart = [];
    }

    getCart() {
        return JSON.parse(localStorage.getItem('client_cart'));
    }

    addProductToCart(data) {
        this.cart.push(data);
        localStorage.setItem('client_cart', JSON.stringify(this.cart));
    }

    deleteProductFromCart(id){
        this.cart = JSON.parse(localStorage.getItem('client_cart'));
        const indexOfProductTODelete = this.cart.indexOf(this.cart.find((e) => { return e.id == id }));
        this.cart.splice(indexOfProductTODelete, 1);
        localStorage.setItem('client_cart', JSON.stringify(this.cart));
    }
}