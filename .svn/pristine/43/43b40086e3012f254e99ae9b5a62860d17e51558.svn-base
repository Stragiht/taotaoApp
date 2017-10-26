/**
 * http配置
 */
// 引入axios
import axios from 'axios'
// import toaster from '../assets/js/toaster'
// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
// axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(response => {
  // 响应成功关闭loading
  return response
}, error => {
  return Promise.reject(error)
})

export default axios
