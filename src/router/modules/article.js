// 文章
import layout from '@/layout/index.vue';

const userRouter = {
  path: '/article',
  redirect: '/article/list',
  component: layout,
  meta: {
    title: '文章模块',
    icon: 'pic-center',
  },
  children: [
    {
      path: 'list',
      name: 'articleIndex',
      component: () => import('@/views/article/list.vue'),
      meta: {
        title: '文章列表',
        icon: 'book',
      },
    },
    {
      path: 'table',
      name: 'articleTable',
      component: () => import('@/views/article/table.vue'),
      meta: {
        title: '文章表格',
        icon: 'book',
      },
    },
    {
      path: 'create',
      name: 'createArticle',
      // TODO 为什么设置hidden不生效
      hidden: true,
      component: () => import('@/views/article/create.vue'),
      meta: {
        title: '发布文章',
        icon: 'container',
      },
    },
    {
      path: 'edit/:id(\\d+)',
      name: 'editArticle',
      hidden: true,
      component: () => import('@/views/article/edit.vue'),
      meta: {
        title: '编辑文章',
        icon: 'container',
      },
    },
    {
      path: 'preview/:id(\\d+)',
      name: 'previewArticle',
      hidden: true,
      component: () => import('@/views/article/preview.vue'),
      meta: {
        title: '预览文章',
        icon: 'container',
      },
    },
  ],
};

export default userRouter;
