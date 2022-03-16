<!-- 折线图 -->
<template>
  <BaseChart :type="type" :chart-data="chartData" :title="title"></BaseChart>
</template>

<script>
import BaseChart from '@/components/ECharts/BaseChart';
export default {
  components: { BaseChart },
  data() {
    return {
      type: 'line',
      title: '各产品每日销售量折线图',
      chartData: [
        { name: '家用电器', data: [120, 210, 220, 322, 425, 533, 573] },
        { name: '食用酒水', data: [79, 51, 122, 132, 145, 223, 299] },
        { name: '个护健康', data: [123, 142, 242, 232, 245, 276, 233] },
        { name: '服饰箱包', data: [212, 321, 344, 356, 378, 399, 423] },
        { name: '母婴产品', data: [42, 21, 22, 32, 45, 43, 38] },
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
