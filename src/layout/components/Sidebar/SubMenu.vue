<!-- a-sub-menu -->
<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
    <template slot="title">
      <a-icon :type="menuInfo.meta.icon" /><span>{{ menuInfo.meta.title }}</span>
    </template>
    <template v-for="item in menuInfo.children">
      <MenuItem v-if='!item.children' :key='resolvePath(item.path)' :menu-info="item"
      :base-path='basePath'/>
      <SubMenu v-else :key="resolvePath(item.path)" :menu-info="item"
      :base-path='resolvePath(item.path)'/>
    </template>
  </a-sub-menu>
</template>

<script>
import { Menu } from 'ant-design-vue';
import path from 'path';
import MenuItem from '@/layout/components/Sidebar/MenuItem.vue';
import { isExternal } from '@/utils/validate';

export default {
  name: 'SubMenu',
  components: { MenuItem },
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
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
    resolvePath(routePath, basePath = '') {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(basePath)) {
        return basePath;
      }
      return path.resolve(basePath, routePath);
    },
  },
};
</script>
<style lang='scss' scoped>
.container{}
</style>
