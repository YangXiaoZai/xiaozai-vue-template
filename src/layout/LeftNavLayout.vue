<template>
  <a-layout class="layout-container">
    <a-layout-sider v-model="collapsed" :theme="pageStyle" collapsible>
      <Logo :collapsed="collapsed"></Logo>
      <Sidebar :collapsed="collapsed"></Sidebar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <Breadcrumb></Breadcrumb>
        <UserMenu></UserMenu>
      </a-layout-header>
      <a-layout-content>
        <AppMain />
      </a-layout-content>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Sidebar from '@/layout/components/Sidebar/index.vue';
import AppMain from '@/layout/components/AppMain.vue';
import Logo from '@/layout/components/Logo.vue';
import Breadcrumb from '@/components/Breadcrumb/index.vue';
import UserMenu from '@/layout/components/UserMenu/index.vue';

import { mapState } from 'vuex';

export default {
  components: { Sidebar, AppMain, Logo, Breadcrumb, UserMenu },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapState({
      mode: (state) => state.settings.navigationMode,
      pageStyle: (state) => state.settings.pageStyle,
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
  .layout-header {
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
