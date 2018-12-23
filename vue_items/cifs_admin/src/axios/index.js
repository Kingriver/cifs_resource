import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://www.wx.com';



/**
 * get 请求数据进行修改  默认以对象形式传参
 */
function getDataConfig(data = {}) {
    if (typeof data !== 'object') return data
    const arr = []
    for (let key in data) {
        let res = `${key}=${data[key]}`
        arr.push(res)
    }
    const str = arr.join('&')
    return str
}

//http request 拦截器
axios.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
            config.data = qs.stringify(config.data)
        } else {
            config.headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        }
        // 此处应该行不通
        // if (config.method === 'get') config.data = getDataConfig(config.data)
        return config
            // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
            //config.data = JSON.stringify(config.data);
            // if(token){
            //   config.params = {'token':token}
            // }
    },
    error => {
        return Promise.reject(err);
    }
)

/**
 * 响应数据拦截
 */
axios.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                //console.log(response)
                resolve(response);
            }, err => {
                reject(err)
            })
    })
}

export default {get, post }