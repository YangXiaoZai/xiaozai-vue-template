<!-- a-sub-menu -->
<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
    <MsgItem slot="title" :menu-info="menuInfo" />
    <template v-for="item in menuInfo.children">
      <MenuItem
        v-if="
          hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
        "
        :key="resolvePath(item.path)"
        :menu-info="item"
        :base-path="basePath"
      />
      <SubMenu v-else :key="resolvePath(item.path)" :menu-info="item" :base-path="resolvePath(item.path)" />
    </template>
  </a-sub-menu>
</template>

<script>
import { Menu } from 'ant-design-vue';
import path from 'path';
import { isExternal } from '@/utils/validate';

import MenuItem from '@/layout/components/Sidebar/MenuItem.vue';
import MsgItem from '@/layout/components/Sidebar/MsgItem.vue';
import mixin from '@/layout/components/Sidebar/mixin';

export default {
  name: 'SubMenu',
  components: { MenuItem, MsgItem },
  mixins: [mixin],
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
    return {};
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
<style lang="scss" scoped>
.container {
}
</style>
