import axios from 'axios';

const domain = 'http://localhost:3333';

// 对接口请求前的参数进行转换, 主要添加统一的domain
axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

// 对返回的结果进行拦截, 主要有两部分: 数据转换, 错误处理
axios.interceptors.response.use((response) => response.data, (err) => Promise.reject(err));

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);

export const put = (url, params) => axios.put(url, params);

export const del = (url, params) => axios.del(url, params);

export const patch = (url, params) => axios.patch(url, params);
