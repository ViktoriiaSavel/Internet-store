import { ProductsTableService } from "./../services/products.table.service";
import { DeleteProductService } from "./../services/delete.product.service";
import { Routing } from "./../core/routing.service";

export class ProductsTableComponent {
    constructor() {
        this._productsTableService = new ProductsTableService();
        this._deleteProductService = new DeleteProductService();
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
        <div class="container">
            <button type="button" class="btn btn-primary m-3" id="addProductBtn">Add product</button>   
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Available</th>
                        <th scope="col">Image</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.productList.join('')}
                </tbody>
          </table>
        </div>
        `;
    };

    _productTemplate({
        id,
        name,
        desc,
        img,
        available,
        price
    }) {
        return `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${desc}</td>
                <td>${price}$</td>
                <td>${available ? 'In Stock' : 'Out of Stock'}</td>
                <td><img style="width: 200px" src="${img}" target="_blank" ></img></td>
                <td>
                    <button type="button" class="btn btn-primary btn-sm mt-1" id="edit">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm mt-1" id="delete">Delete</button>
                </td>
            </tr>
        `
    };

    afterRender() {
        const tableSelector = document.querySelector('tbody');
        const addProductBtn = document.querySelector('#addProductBtn');

        addProductBtn.addEventListener('click', () => {
            this._routing.navigate('/addproduct');
        });

        tableSelector.addEventListener('click', async (e) => {
            e.preventDefault();

            if(e.target.id == "delete"){
                const productID = e.target.parentElement.parentElement.firstElementChild.innerHTML;

                //call service to delete the product on backend
                await this._deleteProductService.deleteProduct(productID);
                window.location.reload();
            };

            if(e.target.id == "edit") {
                const productID = e.target.parentElement.parentElement.firstElementChild.innerHTML;

                this._routing.navigate(`/addproduct/${productID}`);
            }
        })
    }    
}