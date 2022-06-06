<!-- 柱状图 -->
<template>
  <BaseChart :title="title" :type="type" :color="color" :chart-data="chartData"></BaseChart>
</template>

<script>
import BaseChart from '@/components/ECharts/BaseChart';
export default {
  components: { BaseChart },
  data() {
    return {
      title: '每日男女消费总额对比',
      type: 'bar',
      color: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: '#0047B1',
            },
            {
              offset: 0,
              color: '#178BFF',
            },
          ],
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: '#f54ea2',
            },
            {
              offset: 0,
              color: '#ff7676',
            },
          ],
        },
      ],
      chartData: [
        { name: '男', data: [102, 132, 146, 89, 167, 198, 105] },
        { name: '女', data: [342, 353, 464, 324, 373, 393, 402] },
      ],
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
