<template>
  <div class="container">
    <LeftNavLayout v-if="mode === 'inline'"></LeftNavLayout>
    <TopNavLayout v-else></TopNavLayout>
    <Setting class="setting-container"></Setting>
  </div>
</template>
<script>
import LeftNavLayout from '@/layout/LeftNavLayout.vue';
import TopNavLayout from '@/layout/TopNavLayout.vue';
import Setting from '@/layout/components/Setting/index.vue';
import { mapState } from 'vuex';

export default {
  components: { LeftNavLayout, TopNavLayout, Setting },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
    ...mapState({
      mode: (state) => state.setting.navigationMode,
    }),
  },
  created() {},
};
</script>
<style lang="scss" scope>
.container {
  position: relative;
  .setting-container {
    position: absolute;
    right: 0;
    top: 300px;
  }
}
</style>
