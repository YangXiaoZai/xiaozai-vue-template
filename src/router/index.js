import Vue from 'vue';
import Router from 'vue-router';

// layout
import layout from '@/layout/index.vue';
// modules
import nestedRouter from './modules/nested';

Vue.use(Router);

// 路由使用前必读！！！
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

// 基础路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: layout,
    meta: {
      title: '看板',
      icon: 'dashboard',
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '看板',
          icon: 'dashboard',
        },
      },
      {
        path: 'dashboard1',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '看板1',
          icon: 'dashboard',
        },
      },
      {
        path: 'dashboard2',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '看板2',
          icon: 'dashboard',
        },
      },
    ],
  },
  {
    path: '/test',
    redirect: '/test/index',
    component: layout,
    meta: {
      title: '测试',
      icon: 'dashboard',
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/test1/index.vue'),
        meta: {
          title: '测试',
          icon: 'dashboard',
        },
      },
    ],
  },
  // TODO 404，401
  nestedRouter,
];

// 根据权限动态设置
export const asyncRoutes = [
  {
    path: 'http://www.baidu.com',
    // name: 'District',
    component: () =>
      import(/* webpackChunkName: "map" */ '@/views/map/district.vue'),
    meta: {
      title: '地图',
      icon: 'dashboard',
      roles: ['admin', 'editor'],
    },
    // children: [{
    //   path: '/district1',
    //   name: 'District1',
    //   component: () => import(/* webpackChunkName: "map" */ '@/views/map/district.vue'),
    //   meta: {
    //     title: '地图',
    //     icon: 'dashboard',
    //     roles: ['admin', 'editor'],
    //   },
    // }],
  },
  {
    path: '/about',
    // name: 'About',
    component: layout,
    redirect: '/about/index',
    meta: {
      title: '关于',
      icon: 'dashboard',
      roles: ['admin'],
    },
    children: [
      {
        path: 'index',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {
          title: '关于',
          icon: 'dashboard',
        },
      },
    ],
  },
];

// const routes = [
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
//   },
//   {
//     path: '/',
//     redirect: '/dashboard',
//     component: layout,
//     children: [
//       {
//         path: 'dashboard',
//         component: () => import('@/views/dashboard/index.vue'),
//         name: 'Dashboard',
//         meta: { title: 'Dashboard', icon: 'dashboard', affix: true },
//       },
//     ],
//   },
//   {
//     path: '/map',
//     name: 'Map',
//     // component: () => import(/* webpackChunkName: "map" */'@/views/map/index.vue'),
//     redirect: '/map/home',
//     children: [
//       {
//         path: 'home',
//         component: () => import(/* webpackChunkName: "map" */ '@/views/map/index.vue'),
//         name: 'mapHome',
//       }, {
//         path: 'district',
//         component: () => import(/* webpackChunkName: "map" */ '@/views/map/district.vue'),
//       },
//     ],
//   },
//   {
//     path: '/district',
//     component: () => import(/* webpackChunkName: "map" */ '@/views/map/district.vue'),
//     name: 'district',
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//   },
// ];

const createRouter = () =>
  new Router({
    // mode: 'history', // 需要服务器配置
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// TODO查看详情
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
