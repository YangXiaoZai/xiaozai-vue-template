<!-- logo区域 -->
<template>
  <div class="sidebar-logo-container">
    <transition>
      <!-- 菜单收起状态 -->
      <router-link v-if="collapsed" key="collapsed" to="/">
        <img v-if="logo" :src="logo" alt="" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
      <!-- 菜单展开状态 -->
      <router-link v-else key="expand" to="/">
        <img v-if="logo" :src="logo" alt="" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
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
      title: 'Xiao Zai Template',
    };
  },
  computed: {},
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
.container {
  .sidebar-logo {
    width: 32px;
    height: 32px;
  }
}
</style>
