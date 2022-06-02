import axios from 'axios'
import store from './store'
import tips from './tips'

axios.defaults.timeout = 60 * 1000 * 10
axios.defaults.cache = false

axios.interceptors.request.use(
  config => {
    config.headers['locale-key'] = '2'
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'
    return config
  }, error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    return response
  }, error => {
    if (error.response.status === 422 || error.response.status === 401) {
      return error.response
    } else {
      return Promise.reject(error)
    }
  }
)
function checkStatus (response) {
  // return response['data']
  if (response.status === 200 || response.status === 304) {
    return response['data']
  } else {
    if (response.status === 422) {
      tips({
					msg: response.data.message
      });
      return response['data']
    } else if (response.status === 401) {
      console.log("token失效")
    }else {
      throw new Error(response.data.message)
    }
  }
}
export function post (url, data, config) {
  return axios.post(url, data, config).then(checkStatus)
}
export function get (url, params) {
  return axios.get(url, {params}).then(checkStatus)
}
