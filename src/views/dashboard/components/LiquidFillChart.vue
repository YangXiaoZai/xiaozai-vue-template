<!--  -->
<template>
  <a-row>
    <a-col :sm="24" :md="12" :lg="12">
      <!-- <p class="liquid-chart-title">发货占比</p> -->
      <LiquidFillChart :title="'发货占比'"></LiquidFillChart>
    </a-col>
    <a-col :sm="24" :md="12" :lg="12">
      <!-- <p class="liquid-chart-title"></p> -->
      <LiquidFillChart :chart-data="chartData" :title="'剩余库存'"></LiquidFillChart>
    </a-col>
  </a-row>
</template>

<script>
import LiquidFillChart from '@/components/ECharts/LiquidFillChart';
export default {
  components: { LiquidFillChart },
  data() {
    return {
      chartData: [0.3, 0.2],
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
.liquid-chart-title {
  font-size: 18px;
  font-weight: bold;
}
</style>
