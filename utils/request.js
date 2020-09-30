import axios from 'axios'

import config from '../config'

console.log('...', config)

const instance = axios.create({
  baseUrl: config.BASE_URL
})

export const get = (url, params) =>
  instance({
    url,
    method: 'GET',
    params
  })

export const post = (url, data) =>
  instance({
    url,
    method: 'POST',
    data
  })

export const put = (url, data) =>
  instance({
    url,
    method: 'PUT',
    data
  })

export const del = (url, data) =>
  instance({
    url,
    method: 'DELETE',
    data
  })

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
