// 用户
import layout from '@/layout/index.vue';

const userRouter = {
  path: '/user',
  redirect: '/user/basic',
  component: layout,
  meta: {
    title: '个人中心',
    icon: 'pic-center',
  },
  children: [
    {
      path: 'basic',
      name: 'userBasic',
      component: () => import('@/views/user/index.vue'),
      meta: {
        title: '个人信息',
        icon: 'pic-center',
      },
    },
  ],
};

export default userRouter;
