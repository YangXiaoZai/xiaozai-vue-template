<template>
  <a-layout class="layout-container">
    <a-layout-header class="layout-header" :class="pageStyle == 'light' ? 'bg-fff' : ''">
      <Logo></Logo>
      <sidebar class="top-nav-menu"></sidebar>
    </a-layout-header>
    <a-layout-content>
      <AppMain />
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
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
.layout-header {
  display: flex;
  align-items: center;
  padding: 0;
  // max-width: 1200px;
  // margin: auto;
}
.top-nav-menu {
  margin-left: 20px;
}
.bg-fff {
  background: #fff !important;
  transition: all 0.3s;
}
</style>
<style lang="scss">
.top-nav-menu {
  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: transparent !important;
  }
  .ant-menu-horizontal {
    border-bottom: 1px solid transparent;
  }
}
</style>
