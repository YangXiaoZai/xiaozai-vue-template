// import { Message } from 'ant-design-vue';
import NProgress from 'nprogress'; // progress bar
import router from './router';
// import store from './store';
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '@/utils/auth'; // 通过cookie获取token
import setPageTitle from '@/utils/set-page-title';

NProgress.configure({ showSpinner: false }); // NProgress取消圆圈

// 白名单，不需要token也可以访问
const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  // NProgress开始
  NProgress.start();
  // 设置title
  document.title = setPageTitle();
  // 是否有token值
  const hasToken = getToken();

  // 有token
  if (hasToken) {
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else if (whiteList.indexOf(to.path) !== -1) { // 白名单
    next();
  } else {
    next(`/login?redirect=${to.path}`);
  }
  NProgress.done();
});
