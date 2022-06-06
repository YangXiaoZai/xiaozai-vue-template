<template>
  <div class="container">
    <LeftNavLayout v-if="mode === 'inline'"></LeftNavLayout>
    <TopNavLayout v-else></TopNavLayout>
    <!-- Settings仅在开发环境展示 -->
    <Settings v-if="isDevelopment" class="setting-container"></Settings>
  </div>
</template>
<script>
import LeftNavLayout from '@/layout/LeftNavLayout.vue';
import TopNavLayout from '@/layout/TopNavLayout.vue';
import Settings from '@/layout/components/Settings/index.vue';
import { mapState } from 'vuex';
import themeColor from './components/Settings/themeColor/updateThemeColor.js';

export default {
  components: { LeftNavLayout, TopNavLayout, Settings },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapState({
      mode: (state) => state.settings.navigationMode,
      themeColor: (state) => state.settings.themeColor,
    }),
    key() {
      return this.$route.fullPath;
    },
    isDevelopment() {
      return process.env.NODE_ENV === 'development';
    },
  },
  created() {
    // 更换主题
    themeColor.changeColor(this.themeColor);
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  .setting-container {
    position: absolute;
    right: 0;
    top: 300px;
  }
}
</style>
