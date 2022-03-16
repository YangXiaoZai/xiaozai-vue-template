<!-- 雷达图 -->
<template>
  <RadarChart :title="title" :chart-data="chartData" :radar="radar"></RadarChart>
</template>

<script>
import RadarChart from '@/components/ECharts/RadarChart';
export default {
  components: { RadarChart },
  data() {
    return {
      title: '各大区综合对比图',
      chartData: [
        {
          value: [4200, 3000, 20000, 35000, 50000],
          name: '订单量',
        },
        {
          value: [5000, 14000, 28000, 26000, 42000],
          name: '销售额',
        },
      ],
      radar: {
        //  形状圆
        // shape: 'circle',
        indicator: [
          { name: '华东大区', max: 6500 },
          { name: '华西大区', max: 16000 },
          { name: '华南大区', max: 30000 },
          { name: '华北大区', max: 38000 },
          { name: '华中大区', max: 52000 },
        ],
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
}
</style>
