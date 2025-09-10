import axios from 'axios';

const API = `${process.env.VUE_APP_API_URL}/dashboard`;

export default {
  getSummary() {
    return axios.get(API);
  },
};
