<template>
  <div class="container">
    <LeftNavLayout v-if="mode === 'inline'"></LeftNavLayout>
    <TopNavLayout v-else></TopNavLayout>
    <Settings class="setting-container"></Settings>
  </div>
</template>
<script>
import LeftNavLayout from '@/layout/LeftNavLayout.vue';
import TopNavLayout from '@/layout/TopNavLayout.vue';
import Settings from '@/layout/components/Settings/index.vue';
import { mapState } from 'vuex';

export default {
  components: { LeftNavLayout, TopNavLayout, Settings },
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
      mode: (state) => state.settings.navigationMode,
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
