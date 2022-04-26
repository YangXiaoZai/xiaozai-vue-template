import request from '@/utils/request';

// 获取文章类型
export function getArticleType() {
  return request({
    // url: '/api/v1/article/type',
    url: '/api/v1/articleType',
    method: 'get',
  });
}

// 获取文章列表
export function getArticle({ id, ...params }) {
  return request({
    url: id ? `/api/v1/article/${id}` : '/api/v1/article',
    method: 'get',
    params,
  });
}

// 获取文章详情
// export function getArticleDetail(id) {
//   return request({
//     url: `/api/v1/article/${id}`,
//     method: 'get',
//   });
// }

// 创建文章
export function createArticle(data) {
  return request({
    url: '/api/v1/article/',
    method: 'post',
    data,
  });
}

// 修改文章
export function updateArticle({ id, ...data }) {
  return request({
    url: `/api/v1/article/${id}`,
    method: 'put',
    data,
  });
}

// 删除文章
export function destroyArticle(id) {
  return request({
    url: `/api/v1/article/${id}`,
    method: 'delete',
  });
}
