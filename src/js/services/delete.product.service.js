import { ENV } from "./../config/env";
import { Http } from "./../core/http.service";

export class DeleteProductService {
    deleteProduct(id){
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.delete(`${ENV.apiUrl}/products/${id}`)
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((err) => reject(err));
        })
    }
}