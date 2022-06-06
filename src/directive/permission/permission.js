import store from '@/store';

function checkPermission(el, binding) {
  const { value } = binding;
  const roles = store.getters && store.getters.roles;
  if (Array.isArray(value)) {
    if (value.length > 0) {
      const permissionRoles = value;
      const hasPermission = roles.some((role) => {
        return permissionRoles.includes(role);
      });
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error('权限传入的值必须为数组');
  }
}

export default {
  inserted(el, binding) {
    checkPermission(el, binding);
  },
  update(el, binding) {
    checkPermission(el, binding);
  },
};
