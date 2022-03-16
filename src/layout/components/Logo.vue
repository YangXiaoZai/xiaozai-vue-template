<!-- logo区域 -->
<template>
  <div
    class="sidebar-logo-container"
    :class="mode == 'inline' && pageStyle == 'light' ? 'sidebar-logo-container-border' : ''"
  >
    <transition name="sidebarLogoFade">
      <!-- 菜单收起状态 -->
      <router-link v-if="collapsed" key="collapsed" to="/" class="flex-center sidebar-logo-link">
        <img :src="logo" alt="" class="sidebar-logo" />
      </router-link>
      <!-- 菜单展开状态 -->
      <router-link v-else key="expand" to="/" class="flex-center sidebar-logo-link">
        <img v-if="logo" :src="logo" alt="" class="sidebar-logo" />
        <h1 class="sidebar-title" :class="pageStyle == 'light' ? 'title-black-color' : ''">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const logo = require('@/assets/logo.png');

export default {
  components: {},
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      logo,
    };
  },
  computed: {
    ...mapState({
      title: (state) => state.settings.title,
      pageStyle: (state) => state.settings.pageStyle,
      mode: (state) => state.settings.navigationMode,
    }),
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  methods: {},
};
</script>
<style lang="scss" scoped>
// 动画
.sidebarLogoFade-enter-active {
  transition: opacity 0.8s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  overflow: hidden;
  height: 64px;
  line-height: 64px;

  .sidebar-logo-link {
    width: 100%;
    height: 100%;
  }
  .sidebar-logo {
    width: 32px;
    height: 32px;
  }
  .sidebar-title {
    margin-left: 12px;
    font-size: 18px;
    margin-bottom: 0;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
    color: rgba(255, 255, 255, 0.65);
  }
}
.sidebar-logo-container-border {
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
}
</style>
<style lang="less" scope>
@import '~ant-design-vue/lib/style/themes/index.less'; // 引入官方提供的theme
.title-black-color {
  color: @primary-color !important;
}
</style>
