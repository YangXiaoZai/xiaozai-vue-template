<template>
  <div class="container">
    <div class="flex-center handle-item" @click="visible = true">
      <a-icon type="setting" class="icon" />
    </div>
    <a-drawer
      title="风格设置"
      placement="right"
      :visible="visible"
      :wrap-class-name="'setting-drawer'"
      @close="visible = false"
    >
      <div>
        <div class="conditions-item">
          <h3 class="conditions-item-title">页面整体风格</h3>
          <a-tooltip>
            <template slot="title"> 菜单高亮 </template>
            <div class="option-item same-block" @click="changeSetting('pageStyle', 'light')">
              <img src="https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg" alt="light" />
              <a-icon v-show="pageStyle === 'light'" type="check" class="option-item-icon"></a-icon>
            </div>
          </a-tooltip>

          <a-tooltip>
            <template slot="title"> 菜单暗黑 </template>
            <div class="option-item same-block" @click="changeSetting('pageStyle', 'dark')">
              <img src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg" alt="dark" />
              <a-icon v-show="pageStyle === 'dark'" type="check" class="option-item-icon"></a-icon>
            </div>
          </a-tooltip>
        </div>

        <!-- TODO动态修改主题色 -->
        <div class="conditions-item">
          <p>主题色</p>
          <a-tooltip v-for="item in colorList" :key="item.key">
            <template slot="title"> {{ item.key }} </template>
            <div
              class="color-item same-block"
              :style="{ background: item.color }"
              @click="changeSetting('themeColor', item.color)"
            >
              <a-icon v-show="themeColor === item.color" type="check" class="color-item-icon"></a-icon>
            </div>
          </a-tooltip>
        </div>

        <a-divider></a-divider>

        <div class="conditions-item">
          <h3 class="conditions-item-title">导航模式</h3>
          <a-tooltip>
            <template slot="title"> 侧边菜单栏 </template>
            <div class="option-item same-block" @click="changeSetting('navigationMode', 'inline')">
              <img src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg" alt="light" />
              <a-icon v-show="mode === 'inline'" type="check" class="option-item-icon"></a-icon>
            </div>
          </a-tooltip>

          <a-tooltip>
            <template slot="title"> 顶部菜单栏 </template>
            <div class="option-item same-block" @click="changeSetting('navigationMode', 'horizontal')">
              <img src="https://gw.alipayobjects.com/zos/antfincdn/URETY8%24STp/KDNDBbriJhLwuqMoxcAr.svg" alt="dark" />
              <a-icon v-show="mode === 'horizontal'" type="check" class="option-item-icon"></a-icon>
            </div>
          </a-tooltip>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import { colorList } from './themeColor/color.js';
import themeColor from './themeColor/updateThemeColor.js';
import { mapState } from 'vuex';

export default {
  name: 'SettingDrawer',
  data() {
    return {
      visible: false,
      colorList,
    };
  },
  computed: {
    ...mapState({
      mode: (state) => state.settings.navigationMode,
      pageStyle: (state) => state.settings.pageStyle,
      themeColor: (state) => state.settings.themeColor,
    }),
  },
  methods: {
    changeSetting(key, value) {
      console.log(key, value);
      const data = { key, value };
      this.$store.dispatch('settings/changeSetting', data);
      // 主题色特殊处理
      if (key === 'themeColor') {
        this.updateTheme(value);
      }
    },
    updateTheme(newPrimaryColor) {
      themeColor.changeColor(newPrimaryColor).finally(() => {
        this.$message.loading('正在切换主题', 1);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .handle-item {
    width: 48px;
    height: 48px;
    color: #fff;
    border-radius: 4px 0 0 4px;
  }
  .icon {
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.setting-drawer {
  .conditions-item {
    margin-top: 10px;

    .conditions-item-title {
      font-size: 14px;
    }

    &:first-of-type {
      margin-top: 0px;
    }

    .same-block {
      display: inline-block;
      cursor: pointer;
      position: relative;
    }

    .option-item {
      margin-right: 15px;

      .option-item-icon {
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        top: 20px;
        left: 30px;
      }
    }
    .color-item {
      width: 20px;
      height: 20px;
      margin-right: 6px;

      .color-item-icon {
        position: absolute;
        z-index: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
    }
  }
}
</style>
<style lang="less" scope>
@import '~ant-design-vue/lib/style/themes/index.less'; // 引入官方提供的theme

.handle-item {
  background: @primary-color;
}
</style>
