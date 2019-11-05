export class Http {
    get(url) {
        return new Promise ((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }
  
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((responce => responce.json()))
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        })
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'delete'
            })
            .then((responce => responce.json()))
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        })
    }
}