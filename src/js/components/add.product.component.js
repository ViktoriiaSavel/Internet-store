export class AddProductComponent {
    constructor() {

    }
    render() {
        return `
        <div class="container">
            <form name="addProducts">
                <div class="form-group row">
                <label for="code" class="col-sm-2 col-form-label">Code</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="productCode" placeholder="Code">
                    </div>
                </div>
                <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="productName" placeholder="Name">
                    </div>
                </div>
                <div class="form-group row">
                <label for="goodsPrice" class="col-sm-2 col-form-label">Price</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="productPrice" placeholder="Price">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">Available</div>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="productAvailable">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                <label for="goodsImage" class="col-sm-2 col-form-label">Image</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="productImage" placeholder="Paste image URL">
                    </div>
                </div>
                <div class="form-group row">
                <label for="goodsDescription" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="productDescription" placeholder="Description">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
        </form>
        </div>
        `;
    }

    afterRender() {
        document.forms['addProducts'].addEventListener('submit', (e) => {
            e.preventDefault();
            
            const productCode = e.target.elements['productCode'].value;
            const productName = e.target.elements['productName'].value;
            const productPrice = e.target.elements['productPrice'].value;
            const productAvailable = e.target.elements['productAvailable'].value;
            const productImage = e.target.elements['productImage'].value
            const productDescription = e.target.elements['productDescription'].value

            if (!productCode || !productName || !productPrice || !productAvailable || !productImage || !productDescription) {
                return console.log ('Please fill in all fields of the form!');
            }
        })
    }
}