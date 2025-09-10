import axios from 'axios';

const API = 'http://localhost:5000/api/diagnosa';

export default {
  create(data) {
    return axios.post(API, data);
  },
  update(id, data) {
    return axios.put(`${API}/${id}`, data);
  },
  delete(id) {
    return axios.delete(`${API}/${id}`);
  },
  getById(id) {
    return axios.get(`${API}/${id}`);
  },
  getAll() {
    return axios.get(API);
  },
};
