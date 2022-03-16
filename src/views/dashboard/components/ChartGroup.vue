<!-- 看板图表 -->
<template>
  <div class="container">
    <a-row :gutter="40">
      <a-col :sm="24" :md="24" :xl="12">
        <div class="chart-wrapper">
          <LineChart></LineChart>
        </div>
      </a-col>
      <a-col :sm="24" :md="24" :xl="12">
        <div class="chart-wrapper">
          <BarChart></BarChart>
        </div>
      </a-col>
      <a-col :sm="24" :md="12" :xl="8">
        <div class="chart-wrapper">
          <PieChart></PieChart>
        </div>
      </a-col>
      <a-col :sm="24" :md="12" :xl="8">
        <div class="chart-wrapper">
          <RadarChart></RadarChart>
        </div>
      </a-col>
      <a-col :sm="24" :md="24" :xl="8">
        <div class="chart-wrapper">
          <LiquidFillChart></LiquidFillChart>
        </div>
      </a-col>
      <a-col :sm="24" :md="24" :xl="24">
        <div class="chart-wrapper">
          <KLineChart></KLineChart>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import LineChart from '@/views/dashboard/components/LineChart';
import BarChart from '@/views/dashboard/components/BarChart';
import PieChart from '@/views/dashboard/components/PieChart';
import RadarChart from '@/views/dashboard/components/RadarChart';
import LiquidFillChart from '@/views/dashboard/components/LiquidFillChart';
import KLineChart from '@/views/dashboard/components/KLineChart';
export default {
  components: { LineChart, BarChart, PieChart, RadarChart, LiquidFillChart, KLineChart },
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
  .chart-wrapper {
    padding: 16px;
    box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    margin-bottom: 24px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.65);
    }
  }
}
</style>
