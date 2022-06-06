<!-- 柱状图 -->
<template>
  <PieChart :title="title" :chart-data="chartData"></PieChart>
</template>

<script>
import PieChart from '@/components/ECharts/PieChart';
export default {
  components: { PieChart },
  data() {
    return {
      title: '各产品销售量占比',
      chartData: [
        { name: '家用电器', value: '32' },
        { name: '食用酒水', value: '21' },
        { name: '个护健康', value: '17' },
        { name: '服饰箱包', value: '13' },
        { name: '母婴产品', value: '9' },
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
