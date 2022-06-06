/**
 * antd 表单格式验证
 */

/**
 * @description 必填项
 * @param {string} message
 * @param {string} trigger
 */
export const required = (message = '请输入内容', trigger = 'blur') => ({
  required: true,
  message,
  trigger,
});
