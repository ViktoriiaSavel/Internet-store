import { ENV } from "./../config/env";
import { Http } from "./../core/http.service";

export class AddProductService {
    addProduct(data){
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/products`, data)
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((err) => reject(err));
        })
    }

    updateProduct(id, data){
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.put(`${ENV.apiUrl}/products/${id}`, data)
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((err) => reject(err));
        })
    }
}