<template>
  <a-layout class="layout-container">
    <a-layout-sider v-model="collapsed" :theme="pageStyle" collapsible>
      <Logo :collapsed="collapsed"></Logo>
      <sidebar :collapsed="collapsed"></sidebar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff"></a-layout-header>
      <a-layout-content>
        <AppMain />
      </a-layout-content>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import sidebar from '@/layout/components/Sidebar/index.vue';
import AppMain from '@/layout/components/AppMain.vue';
import Logo from '@/layout/components/Logo.vue';

import { mapState } from 'vuex';

export default {
  components: { sidebar, AppMain, Logo },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapState({
      mode: (state) => state.setting.navigationMode,
      pageStyle: (state) => state.setting.pageStyle,
    }),
    key() {
      return this.$route.fullPath;
    },
  },
  created() {},
};
</script>
<style lang="scss" scope>
.layout-container {
  height: 100vh;
  .ant-layout-content {
    padding: 24px;
  }
}
</style>
