<!-- sidebarIndex -->
<template>
  <div class="container">
    <!-- 菜单栏 -->
    <a-menu :mode="mode" :theme="pageStyle" :inline-collapsed="collapsed">
      <template v-for="item in permissionRoutes">
        <!-- TODO 通过render定义菜单栏 -->
        <template v-if="!item.hidden">
          <!-- <MenuItem v-if="!item.children" :key="item.path" :menu-info="item" /> -->
          <MenuItem
            v-if="
              hasOneShowingChild(item.children, item) &&
              (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
              !item.alwaysShow
            "
            :key="item.path"
            :menu-info="item"
          />
          <SubMenu v-else :key="item.path" :menu-info="item" :base-path="item.path" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

// import SidebarItem from '@/layout/components/Sidebar/SidebarItem.vue';
import SubMenu from '@/layout/components/Sidebar/SubMenu.vue';
import MenuItem from '@/layout/components/Sidebar/MenuItem.vue';
import mixin from '@/layout/components/Sidebar/mixin';
export default {
  components: {
    SubMenu,
    MenuItem,
  },
  mixins: [mixin],
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      mode: (state) => state.setting.navigationMode,
      pageStyle: (state) => state.setting.pageStyle,
    }),
    ...mapGetters(['permissionRoutes']),
  },
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
<style scoped>
.container {
}
</style>
