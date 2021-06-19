import axios from 'axios';

const BASE_URL_AWS = process.env.BASE_URL_AWS

const instance = axios.create({
    baseURL: BASE_URL_AWS
});

export default instance;

