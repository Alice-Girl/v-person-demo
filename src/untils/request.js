import axios from 'axios'
import { ElMessage } from 'element-plus'

import config from '../config'

const service = axios.create({
  baseURL: config.baseApi
});
const NETWORK_ERROR = '网络错误...'

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 显示加载动画（可选）
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

// 响应拦截
service.interceptors.response.use(
  (res) => {
    const { code, data, msg } = res.data
    if(code === 200) {
      return data
    }else {
      const NETWORK_ERROR = '网络错误...'
      ElMessage.error(msg || NETWORK_1)
      return Promise.reject(msg || NETWORK_ERROR)
    }
  },
  (error) => {
    return Promise.reject(error);
  }
)

const request = (options) => {
  options.method = options.method || 'get';
  // 关于get请求参数的调整
  if(options.method.toLowerCase() === 'get') {
    options.params = options.data
   }
  // mock 开关请求处理
  let isMock = config.mock
  if(typeof options.mock !== 'undefined') { 
    isMock = options.mock;
  }

  // 生产环境处理
  if(config .env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }

  return service(options)
}

export default request;
