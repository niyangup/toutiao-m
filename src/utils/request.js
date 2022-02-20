import axios from 'axios'
import store from '@/store'
import JSONbig from 'json-bigint'

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net/',
  transformResponse: [function (data) {
    console.log(data)
    try {
      return JSONbig.parse(data)
    } catch (e) {
      return data
    }
  }]
})

request.interceptors.request.use(function (config) {
  const token = store.state.user?.token

  if (token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default request
