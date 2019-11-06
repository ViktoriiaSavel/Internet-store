import { Routing } from "./../core/routing.service";

export class NavbarComponent {
    constructor() {
        this._routing = new Routing();
        
        this.render = this.render.bind(this);
        this.afterRender = this.afterRender.bind(this);
    }

    render() {
        return `
            <div class="container">
                <button type="button" class="btn btn-light my-5" id="adminButton">Admin</button>
                <button type="button" class="btn btn-dark my-5" id="clientButton">Client</button>
            </div>
        `;
    }

    afterRender() {
        const adminButton = document.querySelector("#adminButton");
        const clientButton = document.querySelector("#clientButton");

        adminButton.addEventListener('click', (e) => {
            this._routing.navigate("/productstable");
        })

        clientButton.addEventListener('click', (e) => {
            this._routing.navigate("/productslist");
        })

    }
}