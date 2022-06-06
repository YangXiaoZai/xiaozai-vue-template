import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引用主题色
import { themeColor } from './settings';
// 设置全局主题色CSS变量
document.body.style.setProperty('--themeColor', themeColor);

// 设置echart主题
import * as echarts from 'echarts';

// 可根据自己需求引用不同的echart图标
// 文件可在此导出 https://echarts.apache.org/zh/theme-builder.html
// import wonderland from '@/assets/echarts/wonderland.project.json';
// echarts.registerTheme('theme', wonderland);

import walden from '@/assets/echarts/walden.project.json';
echarts.registerTheme('theme', walden);

// normalize标准化css
import 'normalize.css/normalize.css';

import { splitFloatFontSize } from './utils/num.js';

// import ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

// import animate.css
import 'animate.css';

import './styles/index.scss'; // global css

import './permission'; // 引用permission

// import CopyText
import CopyText from './utils/copy.js';

Vue.use(CopyText);

Vue.config.productionTip = false; //阻止 vue 在启动时生成生产提示。

// vue prototype
Vue.prototype.$splitFloatFontSize = splitFloatFontSize;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
