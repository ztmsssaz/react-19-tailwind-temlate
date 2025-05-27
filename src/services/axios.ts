import axios from 'axios'
import { getRuntimeConfig } from '../config/runtimeConfig'

const axiosInstance = axios.create({
   baseURL: getRuntimeConfig().API_BASE_URL,
})

export default axiosInstance
