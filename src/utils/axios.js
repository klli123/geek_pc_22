import axios from 'axios'
import { Token_Key, getToken, hasToken, removeToken } from 'utils/token.js'
import { message } from 'antd'
import history from 'utils/history'

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
    if (error.response.status === 401) {
        removeToken(Token_Key);
        message.warn('Your token is invalid, please login again', 2);
        //How to redirect to login page?
        // window.location.href = '/login'
        history.push('/login');

    }
    return Promise.reject(error);
});
export default instance