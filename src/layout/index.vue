<template>
  <a-layout class="layout-container">
    <a-layout-sider v-model="collapsed" collapsible>
      <sidebar></sidebar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header></a-layout-header>
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

export default {
  components: { sidebar, AppMain },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
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
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .ant-layout-header {
    padding: 0 24px;
    .trigger {
      font-size: 20px;
      cursor: pointer;
      color: #fff;
      &:hover {
        color: #1890ff;
      }
    }
  }
  .ant-layout-content {
    padding: 24px;
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
