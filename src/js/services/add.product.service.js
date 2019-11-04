import { ENV } from "./../config/env";
import { Http } from "./../core/http.service";

export class AddProductService {
    setProduct(){
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/products`)
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((err) => reject(err));
        })
    }
}