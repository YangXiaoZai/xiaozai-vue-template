<template>
  <div class="about">
    <p v-html="this.$splitFloatFontSize(3.1415)"></p>
    <a-button type="primary" @click="show = !show">点击查看常见过渡</a-button>
    <transition
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__backOutRight"
    >
      <div v-if="show">
        <p>This is an about page</p>
      </div>
    </transition>
    <h1>列表过渡</h1>
    <a-button type="primary" @click="add" class="m-r-10">新增</a-button>
    <!-- TODO：连续多次点击移除时，需要优化 -->
    <a-button type="primary" @click="remove" class="m-r-10">移除</a-button>
    <a-button type="primary" @click="shuffle">乱序</a-button>
    <transition-group
      tag="p"
      name="fade-list"
      mode="out-in"
      enter-active-class="animate__animated animate__bounceIn animate__fast"
      leave-active-class="animate__animated animate__bounceOutRight animate__fast"
    >
      <span v-for="item in items" :key="item" class="list-item">{{item}}</span>
    </transition-group>
  </div>
</template>
<script>
import _ from 'lodash';

export default {
  data() {
    return {
      show: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      num: 10,
    };
  },
  methods: {
    getRandowIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.getRandowIndex(), 0, this.num += 1);
    },
    remove() {
      this.items.splice(this.getRandowIndex(), 1);
    },
    shuffle() {
      this.items = _.shuffle(this.items);
    },
  },
};
</script>
<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
  font-size: 20px;
  transition: all .2s ease;
}
</style>
