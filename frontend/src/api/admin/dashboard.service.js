import axios from 'axios';

const API = 'http://localhost:5000/api/dashboard';

export default {
  getSummary() {
    return axios.get(API);
  },
};
