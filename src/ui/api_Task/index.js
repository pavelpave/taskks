import TodoApi from './todo';

class Api {
    constructor(url) {
        this.todo = new TodoApi(`${url}`);
    }
}

const api = new Api('http://garpixcms.staging.garpix.com/garpix_workflow/api/v1');
export default api;