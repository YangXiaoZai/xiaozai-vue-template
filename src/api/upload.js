import request from '@/utils/request';

// 上传资源公用API
export function upload(data) {
  return request({
    url: '/api/v1/uploads',
    method: 'post',
    data,
  });
}
