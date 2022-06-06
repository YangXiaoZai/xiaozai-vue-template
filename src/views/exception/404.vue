<template>
  <a-result status="404" title="404" sub-title="抱歉，您访问的页面不存在，请检查您输入的网址是否正确">
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
