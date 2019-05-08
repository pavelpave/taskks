import BaseApi from './base';

class TodoApi extends BaseApi {
    getTasks(params, callback, error) {
        this.get('/task/', params, callback, error);
    }

    getTask(id, callback, error) {
        this.get(`/task/${id}/`, {}, callback, error);
    }

    createTask(params, callback, error) {
        this.post('/task/', params, callback, error);
    }

    setTaskClose(id, callback, error) {
        this.post(`/task/${id}/close/`, {}, callback, error);
    }

    setTaskEstimate(id, callback, error) {
        this.post(`/task/${id}/estimate/`, {}, callback, error);
    }

    setTaskFinish(id, callback, error) {
        this.post(`/task/${id}/finish/`, {}, callback, error);
    }

    setTaskReopen(id, callback, error) {
        this.post(`/task/${id}/reopen/`, {}, callback, error);
    }

    setTaskStart(id, callback, error) {
        this.post(`/task/${id}/start_develop/`, {}, callback, error);
    }

    setTaskStop(id, callback, error) {
        this.post(`/task/${id}/stop_develop/`, {}, callback, error);
    }

    patchTask(id, params, callback, error) {
        this.patch(`/task/${id}/`, params, callback, error);
    }

    bulkTask(params, callback, error) {
        this.post('/task/bulk/', params, callback, error);
    }
}

export default TodoApi;