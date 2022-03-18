<!--水球图-->
<template>
  <div class="liquid-chart-container">
    <p v-if="title" class="liquid-chart-title">{{ title }}</p>
    <div ref="chart" :class="className" :style="{ width, height }"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-liquidfill';
import resize from '@/components/ECharts/mixins/resize';
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '300px',
    },
    // 标题
    title: {
      type: String,
      default: '',
    },
    // 图表数据
    chartData: {
      type: Array,
      default: () => [0.6, 0.5, 0.3, 0.1],
    },
    // 是否展示label
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  computed: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    setTimeout(() => {
      this.initChart();
    }, 200);
  },
  // 生命周期 - 销毁之前
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
      this.setOptions();
    },
    setOptions() {
      // 处理chartData
      let series = [
        {
          type: 'liquidFill',
          data: this.chartData,
          label: {
            show: this.showLabel,
            fontSize: 30,
          },
          radius: '80%',
          animationDuration: 500, //毫秒
          animationDurationUpdate: 500, //毫秒
          outline: {
            borderDistance: 0,
            itemStyle: {
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,.1)',
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, .1)',
            },
          },
        },
      ];

      this.chart.setOption({
        series,
      });
    },
  },
};
</script>
<style lang="less" scope>
.liquid-chart-container {
  position: relative;
  .liquid-chart-title {
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>
