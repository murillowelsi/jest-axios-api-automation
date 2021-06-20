import axios from 'axios';
import { setEnvironmentForAws } from './setEnvironment';

const instance = axios.create({
  baseURL: setEnvironmentForAws(),
  headers: {
    'x-api-key': 'xz28prkZA166lf3zFRAgY8HAknCAIAQh1Y3q8gIe',
  },
});

export default instance;
