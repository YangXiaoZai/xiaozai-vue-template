<!-- 用户菜单 -->
<template>
  <div class="flex-center">
    <a-space>
      <div @click="handleFullscreen">
        <a-tooltip>
          <template slot="title"> {{ fullscreen ? '退出全屏' : '全屏' }} </template>
          <a-icon v-if="fullscreen" class="full-icon" type="fullscreen-exit" />
          <a-icon v-else class="full-icon" type="fullscreen" />
        </a-tooltip>
      </div>

      <a-dropdown>
        <div class="user-info">
          <img v-if="userInfo.avatar" :src="fileBaseUrl + userInfo.avatar" alt="用户头像" class="user-avatar" />
          <a-icon v-else type="user" class="user-avatar" />
          <span>{{ userInfo.nickname || '昵称' }}</span>
        </div>
        <a-menu slot="overlay">
          <a-menu-item> <router-link to="/user">个人中心 </router-link></a-menu-item>
          <a-menu-item>
            <a :href="GITHUB_PROJECT" target="_blank">仓库地址 </a>
          </a-menu-item>
          <a-menu-item @click="logout"> 退出登录 </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-space>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { GITHUB_PROJECT } from '@/utils/repositories';
export default {
  data() {
    return {
      // 全屏
      fullscreen: false,

      fileBaseUrl: process.env.VUE_APP_FILE_BASE_URL,
      GITHUB_PROJECT,
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout');
      this.$router.push('/login');
    },
    handleFullscreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        // 退出全屏
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        // 全屏
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  .full-icon {
    font-size: 20px;
    cursor: pointer;
    vertical-align: sub;
  }
  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .user-avatar {
      width: 40px;
      height: 40px;
      font-size: 20px;
      border-radius: 50%;
      margin-right: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
