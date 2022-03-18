<!-- 面包屑 -->
<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item, index) in routesList" :key="index">
      <span v-if="routesList.indexOf(item) == routesList.length - 1">{{ item.meta.title }}</span>
      <router-link v-else :to="item.redirect || item.path">{{ item.meta.title }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {},
  data() {
    return {
      routesList: [],
    };
  },
  computed: {
    ...mapGetters(['permissionRoutes']),
  },
  watch: {
    $route: {
      handler() {
        this.getBreadcrumb();
      },
      immediate: true,
    },
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
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.meta && item.meta.title);
      if (matched[0] && matched[0].name !== 'Index') {
        matched = [{ path: '/', meta: { title: '首页' } }].concat(matched);
      }
      // 过滤设置breadcrumb为false
      this.routesList = matched.some((item) => item.meta.breadcrumb === false) ? [] : matched;
    },
    // TODO 处理 类似 edit/12/的路由
  },
};
</script>
