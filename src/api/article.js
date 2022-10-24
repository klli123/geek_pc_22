import request from 'utils/axios'

export function getArticles(params) {
    return request({
        method: "GET",
        url: "/mp/articles",
        params,
    })
}