import axios from 'axios'
import { Cookies } from 'quasar'

const basicAxios = axios.create({
  baseURL: 'http://localhost:8080'
})

basicAxios.interceptors.request.use(async function (config) {
  if (Cookies.get('token')) {
    config.headers['Authorization'] = Cookies.get('token')
  } else {
    delete config.headers['Authorization']
  }

  return config
})

export default basicAxios
