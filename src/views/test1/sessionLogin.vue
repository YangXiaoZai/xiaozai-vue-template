<!-- 通过session验证登录 -->
<template>
  <div class="container">
    <input v-model="form.user" type="text" />
    <input v-model="form.password" type="password" />
    <button @click="login">登录</button>
    <button @click="getInfo">获取用户信息</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      form: {
        user: '',
        password: '',
      },
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
  methods: {
    async login() {
      await fetch(`${process.env.VUE_APP_BASE_URL}/loginBySession`, {
        method: 'POST',
        body: JSON.stringify(this.form),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    },
    async getInfo() {
      await fetch(`${process.env.VUE_APP_BASE_URL}/getUserInfoBySession`);
    },
  },
};
</script>
<style lang="less" scoped>
.container {
}
</style>
