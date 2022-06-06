// 文章
import layout from '@/layout/index.vue';

const userRouter = {
  path: '/article',
  redirect: '/article/list',
  component: layout,
  meta: {
    title: '文章模块',
    icon: 'container',
  },
  children: [
    {
      path: 'list',
      name: 'articleIndex',
      component: () => import('@/views/article/list.vue'),
      meta: {
        title: '文章列表',
      },
    },
    {
      path: 'table',
      name: 'articleTable',
      component: () => import('@/views/article/table.vue'),
      meta: {
        title: '文章表格',
      },
    },
    {
      path: 'create',
      name: 'createArticle',
      hidden: true,
      component: () => import('@/views/article/create.vue'),
      meta: {
        title: '发布文章',
      },
    },
    {
      path: 'edit/:id(\\d+)',
      name: 'editArticle',
      hidden: true,
      component: () => import('@/views/article/edit.vue'),
      meta: {
        title: '编辑文章',
      },
    },
    {
      path: 'preview/:id(\\d+)',
      name: 'previewArticle',
      hidden: true,
      component: () => import('@/views/article/preview.vue'),
      meta: {
        title: '预览文章',
      },
    },
  ],
};

export default userRouter;
