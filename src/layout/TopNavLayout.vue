<template>
  <a-layout class="top-nav-layout-container">
    <a-layout-header class="layout-header" :class="pageStyle == 'light' ? 'bg-fff' : ''">
      <div class="top-nav-main flex-center">
        <Logo></Logo>
        <Sidebar class="top-nav-menu"></Sidebar>
      </div>
    </a-layout-header>
    <a-layout-content class="top-nav-layout">
      <AppMain class="content-main" />
    </a-layout-content>
    <a-layout-footer class="footer-main">Footer</a-layout-footer>
  </a-layout>
</template>
<script>
import Sidebar from '@/layout/components/Sidebar/index.vue';
import AppMain from '@/layout/components/AppMain.vue';
import Logo from '@/layout/components/Logo.vue';

import { mapState } from 'vuex';

export default {
  components: { Sidebar, AppMain, Logo },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapState({
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
$mainWidth: 1200px;
.top-nav-layout-container {
  .top-nav-main,
  .content-main,
  .footer-main {
    width: $mainWidth;
    margin: auto;
  }
  .top-nav-main {
    margin: inherit;
  }
  .content-main,
  .footer-main {
    padding: 20px 0;
    box-sizing: border-box;
  }
  .top-nav-menu {
    .ant-menu.ant-menu-dark .ant-menu-item-selected,
    .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
      background-color: transparent !important;
    }
    .ant-menu-horizontal {
      border-bottom: 1px solid transparent;
    }
  }
}
</style>
