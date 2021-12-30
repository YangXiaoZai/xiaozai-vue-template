<!-- a-menu-item -->
<template>
  <a-menu-item v-bind="$props" v-on="$listeners">
    <AppLink v-if="menuInfo.meta" :to="resolvePath(menuInfo.path)">
        <a-icon :type="menuInfo.meta.icon" />
        <span>{{ menuInfo.meta.title }}</span>
    </AppLink>
  </a-menu-item>
</template>

<script>
import { Menu } from 'ant-design-vue';

import path from 'path';
import { isExternal } from '@/utils/validate';
import AppLink from '@/layout/components/Sidebar/AppLink.vue';

export default {
  components: { AppLink },
  // must add isMenuItem: true
  isMenuItem: true,
  props: {
    ...Menu.Item.props,
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    return {

    };
  },
  computed: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>
