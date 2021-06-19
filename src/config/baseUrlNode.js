import axios from 'axios';
import { setEnvironmentForNode } from "./setEnvironment";
import { SM } from "./globals";

const instance = axios.create({
    baseURL: setEnvironmentForNode(SM)
});

instance.interceptors.response.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

export default instance;

