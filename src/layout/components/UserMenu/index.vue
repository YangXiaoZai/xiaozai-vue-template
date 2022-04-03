<!-- 用户菜单 -->
<template>
  <a-dropdown>
    <div>
      <img src="~@/assets/user/author.png" alt="用户头像" class="user-avatar" />
      <span>小在</span>
    </div>
    <a-menu slot="overlay">
      <a-menu-item> <router-link to="/user">个人中心 </router-link></a-menu-item>

      <a-menu-item @click="logout"> 退出登录 </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout');
      this.$router.push('/login');
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-right: 6px;
  }
}
</style>
