import axios from 'axios';

const API = 'http://localhost:5000/api/penyakit';

export default {
  getAll() {
    return axios.get(API);
  },
  getById(id) {
    return axios.get(`${API}/${id}`);
  },
  create(data) {
    return axios.post(API, data);
  },
  update(id, data) {
    return axios.put(`${API}/${id}`, data);
  },
  delete(id) {
    return axios.delete(`${API}/${id}`);
  }
};
