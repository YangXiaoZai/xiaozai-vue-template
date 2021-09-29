import request from '@/utils/request';

// eslint-disable-next-line import/prefer-default-export
export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data,
  });
}
