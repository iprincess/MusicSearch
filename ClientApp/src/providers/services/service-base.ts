/*
Base service for all http requests. If we switch fetch libraries we will do it here. 
This should contain no implementation details for the app.
//https://github.com/axios/axios
*/

import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { Method } from 'axios';
import { AxiosResponse } from 'axios';


// things we pass to every request
const baseParams = {
    
};

const getAxiosConfig = (path: string, params?: object, method:Method="GET") : AxiosRequestConfig  => {
    const config = {
        method: method,
        params: Object.assign({}, baseParams, params),
        url: path
    };
    return config;
}

const apiInstance = axios.create({
    baseURL: "https://itunes.apple.com/"
});

export function apiRequest<T> (method:Method, path: string, params?:object): Promise<AxiosResponse<T>> {
    const config = getAxiosConfig(path, params, method);
    return apiInstance.request(config);
}




