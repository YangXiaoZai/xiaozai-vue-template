import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  });
}

// 获取用户基本信息
export function getInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params,
  });
}

// 更新取用户基本信息
export function updateInfo(data) {
  return request({
    url: '/user/info',
    method: 'post',
    data,
  });
}
