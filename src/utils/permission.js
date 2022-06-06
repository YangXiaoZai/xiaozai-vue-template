import store from '@/store';

export default function checkPermission(value) {
  const roles = store.getters && store.getters.roles;
  if (Array.isArray(value)) {
    if (value.length > 0) {
      const permissionRoles = value;
      const hasPermission = roles.some((role) => {
        return permissionRoles.includes(role);
      });
      return hasPermission;
    }
    return false;
  } else {
    console.error('权限传入的值必须为数组');
    return false;
  }
}
