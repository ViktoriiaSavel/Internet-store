import { AddProductService } from "./../services/add.product.service";
import { ProductsTableService } from "./../services/products.table.service";
import { Routing } from "./../core/routing.service";

export class AddProductComponent {
    constructor() {
        this._addProductService = new AddProductService();
        this._productsTableService = new ProductsTableService();
        this._routing = new Routing();
        this._product = {};

        this.beforeRender = this.beforeRender.bind(this);
        this.render = this.render.bind(this);
        this.afterRender = this.afterRender.bind(this);
    }

    async beforeRender(productId) {
        if(productId){
            this._product = await this._productsTableService.getProduct(productId);
        } else {
            this._product = {
                id: '',
                name: "",
                desc: "",
                img: '',
                available: '',
                price: ''
            };
        }
    }

    render() {
        return `
        <div class="container">
            <form name="addProducts">
                <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" required placeholder="Name" value ="${this._product.name ? this._product.name : ""}">
                    </div>
                </div>
                <div class="form-group row">
                <label for="price" class="col-sm-2 col-form-label">Price, $</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="price" required min="0" step=any placeholder="Price" value ="${this._product.price ? this._product.price : ""}">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">Available</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="available" ${this._product.available ? 'checked': ''}>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                <label for="image" class="col-sm-2 col-form-label">Image</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="img" required placeholder="Paste image URL" value ="${this._product.img ? this._product.img : ""}">
                    </div>
                </div>
                <div class="form-group row">
                <label for="description" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="desc" required placeholder="Description" value ="${this._product.desc ? this._product.desc : ""}">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
        </form>
        </div>
        `;
    }

    afterRender() {
        document.forms['addProducts'].addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = e.target.elements['name'].value;
            const price = e.target.elements['price'].value;
            const available = e.target.elements['available'].checked;
            const img = e.target.elements['img'].value;
            const desc = e.target.elements['desc'].value;

            const newProduct = {
                name,
                price,
                available,
                img,
                desc
            };

            if(this._product.id){
                await this._addProductService.updateProduct(this._product.id, newProduct);
            } else {
                await this._addProductService.addProduct(newProduct);
            }

            this._routing.navigate('/productstable');
        })
    }
}