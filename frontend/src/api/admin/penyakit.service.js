import axios from 'axios';

const API = `${process.env.VUE_APP_API_URL}/penyakit`;

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
