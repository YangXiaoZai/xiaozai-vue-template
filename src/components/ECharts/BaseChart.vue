<!--基本图表（折线图📈、柱状图📊）-->
<template>
  <div :class="className" :style="{ width, height }"></div>
</template>

<script>
import * as echarts from 'echarts';
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
    // 图标类型，默认折线
    type: {
      type: String,
      default: 'line',
    },
    // 图表数据
    chartData: {
      type: Array,
      required: true,
    },
    // 主题色
    theme: {
      type: String,
      default: 'theme',
    },
    // X轴
    xAxis: {
      type: Object,
      default: () => ({
        type: 'category',
        boundaryGap: true,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      }),
    },
    // Y轴
    yAxis: {
      type: Object,
      default: () => ({
        type: 'value',
      }),
    },
    // 标题
    title: {
      type: String,
      default: '',
    },
    // 提示框
    tooltip: {
      type: Object,
      default: () => ({
        trigger: 'axis',
        // valueFormatter: (value) => value + '元',
      }),
    },
    // 图例
    legend: {
      //  图例配置
      type: Object,
      default: () => ({
        show: true,
        bottom: 10,
        icon: 'circle',
      }),
    },
    // 网格
    grid: {
      // 图表间距上下左右边距
      type: Object,
      default: () => ({
        left: '3%',
        right: '4%',
        bottom: 40,
        containLabel: true,
      }),
    },
    // 工具箱
    toolbox: {
      type: Object,
      default: () => ({
        feature: {
          // 保存为图片功能
          saveAsImage: {},
        },
      }),
    },
    // 颜色
    // color: {
    //   // 颜色数组
    //   type: Array,
    //   default: () => [
    //     '#3ba0ff',
    //     '#4ecb73',
    //     '#fad337',
    //     '#995d7f',
    //     '#f04864',
    //     '#975fe4',
    //     '#36cbcb',
    //     '#8aabcc',
    //     '#779649',
    //     '#cc5d20',
    //   ],
    // },
    // 其他配置
    otherOption: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  computed: {},
  watch: {
    chartData: {
      deep: true,
      handler() {
        this.initChart();
      },
    },
  },
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
      this.chart = echarts.init(this.$el, this.theme);
      this.setOptions();
    },
    setOptions() {
      // 处理chartData
      let series = [];
      this.chartData.forEach((item) => {
        series.push({
          type: this.type,
          ...item,
        });
      });

      this.chart.setOption({
        ...this.otherOption,
        title: {
          text: this.title,
        },
        series,
        tooltip: this.tooltip,
        legend: this.legend,
        grid: this.grid,
        toolbox: this.toolbox,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        // color: this.color,
      });
    },
  },
};
</script>
