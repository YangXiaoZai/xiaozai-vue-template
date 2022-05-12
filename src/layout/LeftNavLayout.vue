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
      <a-layout-content class="layout-content">
        <AppMain />
      </a-layout-content>
      <a-layout-footer class="layout-footer"><Footer></Footer></a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Sidebar from '@/layout/components/Sidebar/index.vue';
import AppMain from '@/layout/components/AppMain.vue';
import Logo from '@/layout/components/Logo.vue';
import Breadcrumb from '@/components/Breadcrumb/index.vue';
import UserMenu from '@/layout/components/UserMenu/index.vue';
import Footer from '@/layout/components/Footer.vue';

import { mapState } from 'vuex';

export default {
  components: { Sidebar, AppMain, Logo, Breadcrumb, UserMenu, Footer },
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
<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  .layout-header {
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ant-layout-content {
    min-height: auto;
  }
  .layout-footer {
    padding: 0 50px 24px;
  }
}
</style>
