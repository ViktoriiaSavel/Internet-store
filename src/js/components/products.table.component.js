import { ProductsTableService } from "./../services/products.table.service";

export class ProductsTableComponent {
    constructor() {
        this._productsTableService = new ProductsTableService();
        this.beforeRender = this.beforeRender.bind(this);
    }

    async beforeRender() {
        this._products = await this._productsTableService.getProducts();
        console.log(this._products);
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Desk</td>
                        <td>Wooden Desk</td>
                        <td>900</td>
                        <td>true</td>
                        <td><a href="https://cdn20.pamono.com/p/g/4/8/480322_7tuep2o7lr/vintage-wooden-desk-1930s-1.jpg">Click to view</a></td>
                        <td>Edit, Delete</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Desk</td>
                        <td>Wooden Desk</td>
                        <td>900</td>
                        <td>true</td>
                        <td><a href="https://cdn20.pamono.com/p/g/4/8/480322_7tuep2o7lr/vintage-wooden-desk-1930s-1.jpg">Click to view</a></td>
                        <td>Edit, Delete</td>
                    </tr>
                   
                </tbody>
          </table></div>
        `;
    }
}