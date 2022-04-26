<!-- 看板模块 -->
<template>
  <div class="container">
    <!-- panel-group -->
    <PanelGroup></PanelGroup>
    <!-- chart-group -->
    <ChartGroup></ChartGroup>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup';
import ChartGroup from './components/ChartGroup';
export default {
  components: { PanelGroup, ChartGroup },
  data() {
    return {};
  },
};
</script>
