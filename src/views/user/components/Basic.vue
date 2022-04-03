<!-- 基本设置 -->
<template>
  <div class="container">
    <a-form-model :model="form" class="form-container">
      <a-form-model-item label="用户名">
        <a-input v-model="form.username" disabled />
      </a-form-model-item>
      <a-form-model-item label="昵称">
        <a-input v-model="form.nickname" />
      </a-form-model-item>
      <a-form-model-item label="手机号">
        <a-input v-model="form.phone" />
      </a-form-model-item>
      <a-form-model-item label="个人简介">
        <a-input v-model="form.introduction" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary">更新资料</a-button>
      </a-form-model-item>
    </a-form-model>

    <div class="avatar-container"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        username: '',
        nickname: '',
        introduction: '',
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
  methods: {},
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  .form-container {
    flex: 1;
  }
  .avatar-container {
    width: 180px;
    height: 180px;
    margin-left: 100px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
  }
}
</style>
