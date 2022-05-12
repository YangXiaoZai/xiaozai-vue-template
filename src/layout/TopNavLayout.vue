<template>
  <a-layout class="layout-container">
    <a-layout-header class="layout-header" :class="pageStyle == 'light' ? 'bg-fff' : 'color-fff'">
      <div class="top-main flex-between">
        <Logo></Logo>
        <Sidebar class="top-nav"></Sidebar>
        <UserMenu></UserMenu>
      </div>
    </a-layout-header>
    <a-layout-content class="layout-content">
      <AppMain class="content-main" />
    </a-layout-content>
    <a-layout-footer class="layout-footer"><Footer></Footer></a-layout-footer>
  </a-layout>
</template>
<script>
import Sidebar from '@/layout/components/Sidebar/index.vue';
import AppMain from '@/layout/components/AppMain.vue';
import Logo from '@/layout/components/Logo.vue';
import UserMenu from '@/layout/components/UserMenu/index.vue';
import Footer from '@/layout/components/Footer.vue';

import { mapState } from 'vuex';

export default {
  components: { Sidebar, AppMain, Logo, UserMenu, Footer },
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
<style lang="less" scoped>
@mainWidth: 1400px;
.layout-container {
  min-height: 100vh;
  box-sizing: border-box;
  .layout-header {
    display: flex;
    align-items: center;
    padding: 0;
    .top-nav {
      margin-left: 20px;
    }
  }
  .layout-content {
    padding: 24px;
    .content-main {
      padding: 20px 0;
      box-sizing: border-box;
    }
  }
  .layout-footer {
    padding: 0 50px 24px;
  }

  .top-main,
  .content-main {
    width: @mainWidth;
    margin: auto;
  }
  .bg-fff {
    background: #fff !important;
    transition: all 0.3s;
  }
  .color-fff {
    color: #fff;
  }
}
.ant-layout-content {
  min-height: auto;
}
</style>
<style lang="less">
.top-nav {
  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: transparent !important;
  }
  .ant-menu-horizontal {
    border-bottom: 1px solid transparent;
  }
}
</style>
