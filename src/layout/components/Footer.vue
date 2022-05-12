<!-- footer -->
<template>
  <a-space class="flex-center" size="large">
    <a :href="GITHUB_PROJECT" target="_black">©{{ new Date().getFullYear() }} xiaozai-vue-template</a>
    <span>杨小在 免费开源</span>
  </a-space>
</template>

<script>
import { GITHUB_PROJECT } from '@/utils/repositories';
export default {
  components: {},
  data() {
    return {
      GITHUB_PROJECT,
    };
  },
};
</script>
<style lang="less" scoped></style>
