import { ENV } from "./../config/env";
import { Http } from "./../core/http.service";

export class ProductsTableService {
    getProducts(){
        const http = new Http();
        console.log(ProductsTableService)


        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/products`)
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((err) => reject(err));
        })
    }
}