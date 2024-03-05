import axios from 'axios'
import { Cookies } from 'quasar'

const basicAxios = axios.create({
  baseURL: 'http://localhost:8080'
})

basicAxios.interceptors.request.use(async function (config) {
  if (Cookies.get('access_token')) {
    config.headers['Authorization'] = Cookies.get('access_token')
    config.headers['refresh_token'] = Cookies.get('refresh_token')
  } else {
    delete config.headers['Authorization']
    delete config.headers['refresh_token']
  }

  return config
})

export default basicAxios
