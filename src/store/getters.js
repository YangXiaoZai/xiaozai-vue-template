const getters = {
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
  // 该用户有权限访问的路由
  permissionRoutes: (state) => state.permission.routes,
};

export default getters;
