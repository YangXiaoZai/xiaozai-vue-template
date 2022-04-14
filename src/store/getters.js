const getters = {
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
  userInfo: (state) => state.user.userInfo,
  // 该用户有权限访问的路由
  permissionRoutes: (state) => state.permission.routes,
};

export default getters;
