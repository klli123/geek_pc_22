import request from 'utils/axios'

export function getChannels() {
    return request({
        method:'GET',
        url:'/channels'
    })
}