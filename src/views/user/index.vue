<!-- 个人中心 -->
<template>
  <div class="container">
    <a-tabs default-active-key="1" :tab-position="'left'">
      <a-tab-pane key="1" tab="基本设置">
        <Basic></Basic>
      </a-tab-pane>
      <a-tab-pane key="2" tab="安全设置">
        <Binding></Binding>
      </a-tab-pane>
      <a-tab-pane key="3" tab="账号绑定">
        <Security></Security>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Basic from '@/views/user/components/Basic';
import Binding from '@/views/user/components/Binding';
import Security from '@/views/user/components/Security';

export default {
  components: { Basic, Binding, Security },
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
  methods: {},
};
</script>
<style lang="less" scoped>
.container {
  background: #fff;
  padding: 24px;
  box-shadow: 0 8px 8px rgba(143, 168, 191, 0.35);
  border-radius: 6px;
}
</style>
