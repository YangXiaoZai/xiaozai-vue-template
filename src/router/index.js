import Vue from 'vue';
import Router from 'vue-router';

// layout
import layout from '@/layout/index.vue';
// modules
import nestedRouter from './modules/nested';
import userRouter from './modules/user';
import article from './modules/article';

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
    path: '/403',
    name: '403',
    hidden: true,
    component: () => import(/* webpackChunkName: "exception" */ '@/views/exception/403.vue'),
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import(/* webpackChunkName: "exception" */ '@/views/exception/404.vue'),
  },
  // 首页
  {
    path: '/',
    name: 'Index', //首页name必须为Index,面包屑根据此判断
    redirect: '/dashboard',
    component: layout,
    meta: {
      title: '首页',
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
    ],
  },
  // 权限页面
  {
    path: '/permission',
    name: 'Permission',
    component: layout,
    alwaysShow: true, //不论children的length是否为1，始终展示
    meta: {
      title: '权限测试',
      icon: 'deployment-unit',
      roles: ['admin', 'editor'],
    },
    redirect: '/permission/directive',
    children: [
      {
        path: 'page',
        name: 'PermissionPage',
        component: () => import(/* webpackChunkName: "permission" */ '@/views/permission/page.vue'),
        meta: {
          title: '页面测试',
          icon: 'deployment-unit',
          roles: ['admin'],
        },
      },
      {
        path: 'directive',
        name: 'PermissionDirective',
        component: () => import(/* webpackChunkName: "permission" */ '@/views/permission/directive.vue'),
        meta: {
          title: '指令测试',
          icon: 'deployment-unit',
          roles: ['admin', 'editor'],
        },
      },
    ],
  },
  {
    path: '/test',
    component: layout,
    meta: {
      title: '测试',
      icon: 'dashboard',
      breadcrumb: false,
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/test1/index.vue'),
        meta: {
          title: '测试',
          icon: 'dashboard',
          breadcrumb: false,
        },
      },
      {
        path: 'sessionLogin',
        component: () => import('@/views/test1/sessionLogin.vue'),
        meta: {
          title: '通过session登录',
          icon: 'dashboard',
          breadcrumb: false,
        },
      },
      {
        path: 'jwtLogin',
        component: () => import('@/views/test1/jwtLogin.vue'),
        meta: {
          title: '通过jwt登录',
          icon: 'dashboard',
          breadcrumb: false,
        },
      },
    ],
  },
  nestedRouter,
  userRouter,
  {
    path: '/exception',
    name: 'Exception',
    component: layout,
    redirect: '/exception/404',
    meta: {
      title: '异常页面',
      icon: 'dashboard',
    },
    children: [
      {
        meta: {
          title: '403',
          icon: 'dashboard',
        },
        path: '403',
        component: () => import(/* webpackChunkName: "exception" */ '@/views/exception/403.vue'),
      },
      {
        meta: {
          title: '404',
          icon: 'dashboard',
        },
        path: '404',
        component: () => import(/* webpackChunkName: "exception" */ '@/views/exception/404.vue'),
      },
    ],
  },
  {
    path: '/donate',
    name: 'Donate',
    component: layout,
    redirect: '/donate/index',
    children: [
      {
        meta: {
          title: '捐赠作者',
          icon: 'dashboard',
        },
        path: 'index',
        component: () => import(/* webpackChunkName: "donate" */ '@/views/donate/index.vue'),
      },
    ],
  },
  {
    path: '*',
    hidden: true,
    redirect: '/404',
  },
];

// 根据权限动态设置
export const asyncRoutes = [article];

const createRouter = () =>
  new Router({
    // mode: 'history', // 需要服务器配置
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
