import request from '../utils/axios'

export const login = (mobile, code) => {
    // capsulate axios instance and return a promise object which contains response from Server
    return request({
        method: 'POST',
        url: '/authorizations',
        data: {
            mobile,
            code
        }
    })
}

