<template>
  <a-result status="403" title="403" sub-title="抱歉，您没有权限访问该页面">
    <template #extra>
      <a-button type="primary" @click="$router.push('/')">返回首页</a-button>
      <a-button type="primary" @click="$router.go(-1)">返回上一页</a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
