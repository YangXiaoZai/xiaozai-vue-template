// import { Message } from 'ant-design-vue';
import NProgress from 'nprogress'; // progress bar
import router from './router';
import store from './store';
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '@/utils/auth'; // 通过cookie获取token
import setPageTitle from '@/utils/set-page-title';

NProgress.configure({ showSpinner: false }); // NProgress取消圆圈

// 白名单，不需要token也可以访问
const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  // NProgress开始
  NProgress.start();
  // 设置title
  document.title = setPageTitle(to.meta.title);
  // 是否有token值
  const hasToken = getToken();

  if (hasToken) {
    // 判断页面是否为login
    if (to.path === '/login') {
      // 是 =》 跳转首页
      next('/');
    } else {
      // 不是＝》查看用户角色
      // 后台返回的roles必须是一个数组形式，如['admin']
      // const hasRoles = store.getter.roles && store.getter.roles.length > 0;
      const hasRoles = ['admin'];
      if (hasRoles) {
        next();
      } else {
        // 1.获取用户角色
        const { roles } = await store.dispatch('/user/getInfo');
        // 2.自动添加路由
        const asyncRoutes = await store.dispatch('/permisson/generateRoutes', roles);

        router.addRoutes(asyncRoutes);
        // 3.next()

        // 他俩有什么区别吗？
        // next({ ...to, replace: true });
        next();
      }
    }
  } else if (whiteList.includes(to.path)) {
    next();
  } else {
    next(`/login?redict=${to.path}`);
  }
  NProgress.done();
});

router.afterEach(() => {
  NProgress.done();
});
