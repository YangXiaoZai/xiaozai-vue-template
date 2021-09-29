import { Message } from 'ant-design-vue';
import axios from 'axios';
import store from '@/store';
import { getToken } from '@/utils/auth';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000,
});

// aixos interceptor
// request interceptor
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      // 'Authorization'可根据具体的业务更换
      config.headers['Authorization'] = getToken();
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // code 根据具体情况修改
    if (res.code !== 20000) {
      Message.error({
        content: res.message || '数据返回异常',
        duration: 5,
      });
      return Promise.reject(new Error(res.message || '数据返回异常'));
    }
    return res;
  },
  (error) => {
    console.log('err', error);
    Message.error({
      content: error.message || '请求异常',
      duration: 5,
    });
    return Promise.reject(error);
  },
);

export default service;
