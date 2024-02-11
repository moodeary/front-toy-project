import axios from 'axios'

const basicAxios = axios.create({
  baseURL: '/api'
})

export default basicAxios
