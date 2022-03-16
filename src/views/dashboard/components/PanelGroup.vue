<!-- 顶部面板 -->
<template>
  <div class="container">
    <a-row :gutter="40" class="panel-group">
      <a-col :sm="12" :md="12" :xl="6">
        <div class="card-panel">
          <div class="card-panel-description">
            <div class="card-panel-text">用户访问量</div>
            <div class="card-panel-number">1567</div>
          </div>
          <div class="card-panel-icon-warp">
            <!-- TODO尝试使用svg -->
            <a-icon type="user" :style="{ fontSize: '40px', color: '#007175' }" />
          </div>
        </div>
      </a-col>
      <a-col :sm="12" :md="12" :xl="6">
        <div class="card-panel">
          <div class="card-panel-description">
            <div class="card-panel-text">订单总量</div>
            <div class="card-panel-number">3421</div>
          </div>
          <div class="card-panel-icon-warp">
            <a-icon type="shopping" :style="{ fontSize: '40px', color: '##d5ebe1' }" />
          </div>
        </div>
      </a-col>
      <a-col :sm="12" :md="12" :xl="6">
        <div class="card-panel">
          <div class="card-panel-description">
            <div class="card-panel-text">交易总额</div>
            <div class="card-panel-number">￥142310</div>
          </div>
          <div class="card-panel-icon-warp">
            <a-icon type="pay-circle" :style="{ fontSize: '40px', color: '#8b7042' }" />
          </div>
        </div>
      </a-col>
      <a-col :sm="12" :md="12" :xl="6">
        <div class="card-panel">
          <div class="card-panel-description">
            <div class="card-panel-text">目标完成率</div>
            <div class="card-panel-number">73.67%</div>
          </div>
          <div class="card-panel-icon-warp">
            <a-icon type="trophy" :style="{ fontSize: '40px', color: '#f3a694' }" />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
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
  methods: {},
};
</script>
<style lang="less" scoped>
.container {
  .card-panel {
    height: 108px;
    padding: 10px 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    margin-bottom: 24px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.65);
    }
    .card-panel-description {
      font-weight: bold;

      .card-panel-text {
        font-size: 16px;
        margin-bottom: 12px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.45);
        margin-bottom: 10px;
      }

      .card-panel-number {
        font-size: 20px;
      }
    }
  }
}
</style>
