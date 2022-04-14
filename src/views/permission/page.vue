<!-- 页面权限 -->
<template>
  <div class="container">
    <h2>该页面仅为admin可以看到</h2>
    <h2>您的角色为:{{ roles }}</h2>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      roles: this.$store.getters.roles,
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
<style lang="less" scoped>
.container {
}
</style>
