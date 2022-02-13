import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net/'
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
