import axios from 'axios';

const API = `${process.env.VUE_APP_API_URL}/diagnosa`;

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
