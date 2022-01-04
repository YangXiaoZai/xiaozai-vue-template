import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { splitFloatFontSize } from './utils/num.js';

// import ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

// import animate.css
import 'animate.css';

import '@/styles/index.scss'; // global css

import './permission'; // 引用permission

Vue.config.productionTip = false; //阻止 vue 在启动时生成生产提示。

// vue prototype
Vue.prototype.$splitFloatFontSize = splitFloatFontSize

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
console.log('Heelo')