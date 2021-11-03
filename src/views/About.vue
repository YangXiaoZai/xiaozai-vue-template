<template>
  <div class="about">
    <a-button type="primary" @click="show = !show">点击查看过渡效果</a-button>
    <transition name="fade">
      <div v-if='show'>
        <h1>This is an about page</h1>
        <h1>我是一段文字</h1>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
