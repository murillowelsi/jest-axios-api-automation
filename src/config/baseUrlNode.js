import axios from 'axios';
import { setEnvironmentForNode } from "./setEnvironment";
import { SM } from "./globals";

const instance = axios.create({
    baseURL: setEnvironmentForNode(SM),
    headers: {
        'x-api-key': '863c55cd15498f250b53013c182af3f95d6f49a9f6d802efa5ee791f505c9292',
        'x-access-token': '69a79ab88d7923ddc75c6e9439dfa5de30007f3864bea63d323e22aefc101bfc'
    }
});

export default instance;

