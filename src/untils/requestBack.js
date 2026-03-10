import axios from 'axios'

const https = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 从环境变量获取基础 URL
  timeout: 10000, // 超时时间（10秒）
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

let loadingInstance = null

// 请求拦截
https.interceptors.request.use(
  (config) => {
    // 显示加载动画（可选）
    loadingInstance = ElLoading.service({
      lock: true,
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.1)'
    });
    return config;
  },
  (error) => {
    loadingInstance?.close();
    return Promise.reject(error);
  }
)

// 响应拦截
https.interceptors.response.use(
  (response) => {
    loadingInstance?.close();
    const res = response.data

    return res; // 只返回 data 中的有效数据
  },
  (error) => {
    
    return Promise.reject(error);
  }
)

const request = {
  get(url, params = {}, config = {}) {
    return https.get(url, { params, ...config });
  },

  post(url, data = {}, config = {}) {
    return https.post(url, data, config);
  },

  put(url, data = {}, config = {}) {
    return https.put(url, data, config);
  },

  delete(url, params = {}, config = {}) {
    return https.delete(url, { params, ...config });
  }
};

export default request;