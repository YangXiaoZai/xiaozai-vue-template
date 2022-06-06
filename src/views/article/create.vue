<!-- 创建文章 -->
<template>
  <Detail :is-edit="false"></Detail>
</template>

<script>
import Detail from './components/Detail';
export default {
  components: { Detail },
};
</script>
