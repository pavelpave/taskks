import axios from 'axios';
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.headers.common = {
    
    'Authorization': 'Token 6668b8cfdf927ba7710a9b0890de66c12d0b69fa'
};

class BaseApi {
    constructor(url) {
        this.url = url;
    }

    post(url, params, callback, error) {
        this.send(url, 'post', params, callback, error);
    }

    get(url, params, callback, error) {
        const base_url = this.url;
        axios({
            method: 'get',
            params: params,
            url: `${base_url}${url}`,
        })
            .then(callback)
            .catch(error);
    }

    put(url, params, callback, error) {
        this.send(url, 'put', params, callback, error);
    }

    patch(url, params, callback, error) {
        this.send(url, 'patch', params, callback, error);
    }

    delete(url, params, callback, error) {
        this.send(url, 'delete', params, callback, error);
    }

    send(url, method, params, callback, error) {
        const base_url = this.url;
        axios({
            method: method,
            data: params,
            url: `${base_url}${url}`,
        })
        .then(callback)
        .catch(error);
    }
}

export default BaseApi;