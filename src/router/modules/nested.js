// 嵌套路由
import layout from '@/layout/index.vue';

const nestedRouter = {
  path: '/nested',
  redirect: '/nested/menu1',
  component: layout,
  meta: {
    title: '嵌套路由',
    icon: 'ordered-list',
  },
  children: [
    {
      path: 'menu1',
      name: 'Menu1',
      component: () => import('@/views/nested/menu1/index.vue'),
      meta: {
        title: '路由1',
      },
    },
    {
      path: 'menu2',
      name: 'Menu2',
      redirect: '/nested/menu2/menu2-1',
      component: () => import('@/views/nested/menu2/index.vue'),
      meta: {
        title: '路由2',
      },
      children: [
        {
          path: 'menu2-1',
          name: 'Menu2-1',
          component: () => import('@/views/nested/menu2/menu2-1/index.vue'),
          meta: {
            title: '路由2-1',
          },
        },
        {
          path: 'menu2-2',
          name: 'Menu2-2',
          component: () => import('@/views/nested/menu2/menu2-2/index.vue'),
          redirect: '/nested/menu2/menu2-2/menu2-2-1',
          meta: {
            title: '路由2-2',
          },
          children: [
            {
              path: 'menu2-2-1',
              name: 'Menu2-2-1',
              component: () => import('@/views/nested/menu2/menu2-2/menu2-2-1/index.vue'),
              meta: {
                title: '路由2-2-1',
              },
            },
            {
              path: 'menu2-2-2',
              name: 'Menu2-2-2',
              component: () => import('@/views/nested/menu2/menu2-2/menu2-2-2/index.vue'),
              meta: {
                title: '路由2-2-2',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default nestedRouter;
