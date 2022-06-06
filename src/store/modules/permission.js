import { constantRoutes, asyncRoutes } from '@/router/index';

// 判断是否有权限
function hasPermission(route, roles) {
  if (route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  }
  return true;
}
// 根据权限过滤出路由表
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach((route) => {
    if (hasPermission(route, roles)) {
      if (route.children) {
        route.children = filterAsyncRoutes(route.children, roles);
      }
      res.push(route);
    }
  });

  return res;
}

const state = {
  routes: [], // constantRouter + 有权限的asyncRouter
  addRoutes: [], // 有权限的asyncRouter
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  },
};

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise((resolve) => {
      let accessedRoutes;
      // admin为最高权限
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || [];
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      commit('SET_ROUTES', accessedRoutes);
      resolve(accessedRoutes);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
