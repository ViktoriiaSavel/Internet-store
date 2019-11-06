import { ENV } from "./../config/env";
import { Http } from "./../core/http.service";

export class ProductsTableService {
    getProducts(){
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/products`)
            .then((response) => {
                resolve(response);
            })
            .catch((err) => reject(err));
        })
    }

    getProduct(id){
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/products/${id}`)
            .then((response) => {
                resolve(response);
            })
            .catch((err) => reject(err));
        })
    }
}