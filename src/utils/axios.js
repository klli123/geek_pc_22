import axios from 'axios'
import { Token_Key, getToken, hasToken } from 'utils/token.js'

// making axios instance default configuration
const instance = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0/',
    timeout: 5000
})

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (hasToken(Token_Key)) {
        config.headers.Authorization = `Bearer ${getToken(Token_Key)}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export default instance