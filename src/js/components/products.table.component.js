import { ProductsTableService } from "./../services/products.table.service";
import { DeleteProductService } from "./../services/delete.product.service";

export class ProductsTableComponent {
    constructor() {
        this._productsTableService = new ProductsTableService();
        this._deleteProductService = new DeleteProductService();
        this.beforeRender = this.beforeRender.bind(this);
        this.render = this.render.bind(this);
        this.afterRender = this.afterRender.bind(this);
    }

    async beforeRender() {
        this._products = await this._productsTableService.getProducts();
        console.log(this._products);

        this.productList = this._products.map(this._productTemplate);
    }

    render() {
        return `   
        <div class="container">   
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price, $</th>
                        <th scope="col">Available</th>
                        <th scope="col">Image</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.productList.join('')}
                </tbody>
          </table></div>
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
        <tr>
            <th scope="row" class="row">${id}</th>
            <td>${name}</td>
            <td>${desc}</td>
            <td>${price}</td>
            <td>${available}</td>
            <td><a href="${img}">Click to view</a></td>
            <td>
                <button type="button" class="btn btn-primary btn-sm" id="edit">Edit</button>
                <button type="button" class="btn btn-danger btn-sm" id="delete">Delete</button>
            </td>
        </tr>
        `
    }

    afterRender() {
        const tableSelector = document.querySelector('tbody');

        tableSelector.addEventListener('click', async (e) => {
            e.preventDefault();

            if(e.target.id == "delete"){
                const productID = e.target.parentElement.parentElement.firstElementChild.innerHTML;

                //call service to delete th product on backend
                await this._deleteProductService.deleteProduct(productID);

                //update the table
                tableSelector.innerHTML = '';
                beforeRender();
                render();
                afterRender();
            }

            if(e.target.id == "edit"){
                
            }
        })
    }    
}