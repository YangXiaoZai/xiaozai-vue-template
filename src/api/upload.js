import request from '@/utils/request';

// TODO 后期可将上传的全局变量抽离成一个单独js文件
export const UPLOAD_URL = '/api/v1/uploads';
export const UPLOAD_FULL_URL = process.env.VUE_APP_BASE_URL + UPLOAD_URL;

export const MAX_IMG_SIZE = 5 * 1024 * 1024;
export const MAX_FILE_SIZE = 20 * 1024 * 1024;

// 上传资源公用API
export function upload(data) {
  return request({
    url: UPLOAD_URL,
    method: 'post',
    data,
  });
}
