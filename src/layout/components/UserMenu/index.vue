<!-- 用户菜单 -->
<template>
  <a-dropdown>
    <div class="user-info">
      <img v-if="userInfo.avatar" :src="fileBaseUrl + userInfo.avatar" alt="用户头像" class="user-avatar" />
      <a-icon v-else type="user" class="user-avatar" />
      <span>{{ userInfo.nickname || '昵称' }}</span>
    </div>
    <a-menu slot="overlay">
      <a-menu-item> <router-link to="/user">个人中心 </router-link></a-menu-item>
      <a-menu-item>
        <a href="https://github.com/YangXiaoZai/xiaozai-vue-template" target="_blank">仓库地址 </a>
      </a-menu-item>
      <a-menu-item @click="logout"> 退出登录 </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      fileBaseUrl: process.env.VUE_APP_FILE_BASE_URL,
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
  },
};
</script>
<style lang="less" scoped>
.container {
  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .user-avatar {
      width: 40px;
      height: 40px;
      font-size: 40px;
      border-radius: 50%;
      margin-right: 6px;
    }
  }
}
</style>
