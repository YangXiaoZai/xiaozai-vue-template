<!-- 基本设置 -->
<template>
  <div class="container">
    <a-form-model :model="form" class="form-container">
      <a-form-model-item label="用户名">
        <a-input v-model="form.username" disabled />
      </a-form-model-item>
      <a-form-model-item label="昵称">
        <a-input v-model="form.nickname" />
      </a-form-model-item>
      <a-form-model-item label="手机号">
        <a-input v-model.number="form.phone" />
      </a-form-model-item>
      <a-form-model-item label="邮箱">
        <a-input v-model="form.email" />
      </a-form-model-item>
      <a-form-model-item label="个人简介">
        <a-input v-model="form.introduction" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" :loading="loading" @click="updateUserInfo">更新资料</a-button>
      </a-form-model-item>
    </a-form-model>

    <div class="avatar-container" @click="modal.visible = true">
      <img v-if="form.avatar" class="avatar" :src="fileBaseUrl + form.avatar" />
      <a-icon type="plus" class="avatar-hover" />
    </div>

    <!-- 图片裁剪 -->
    <Cropper :modal="modal" @getCorpImg="getCorpImg"> </Cropper>
  </div>
</template>

<script>
import { deepClone } from '@/utils/index';
import validator from 'validator';
import Cropper from '@/components/Cropper';
import { mapState, mapActions } from 'vuex';
import { upload } from '@/api/upload';

export default {
  components: { Cropper },
  data() {
    return {
      form: {
        username: '',
        nickname: '',
        phone: '',
        email: '',
        introduction: '',
        avatar: '',
      },
      loading: false,
      modal: {
        title: '裁剪头像',
        visible: false,
      },
      fileBaseUrl: process.env.VUE_APP_FILE_BASE_URL,
    };
  },
  computed: {
    ...mapState('user', ['userInfo']),
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.form = deepClone(this.userInfo);
  },
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
    ...mapActions('user', ['updateInfo']),
    // 更新信息
    async updateUserInfo() {
      if (this.form.phone && !validator.isMobilePhone(String(this.form.phone), 'zh-CN')) {
        this.$message.warn('您输入的手机号码有误');
        return;
      }
      if (this.form.email && !validator.isEmail(this.form.email)) {
        this.$message.warn('您输入的邮箱有误');
        return;
      }
      const params = {
        ...this.form,
      };
      this.loading = true;
      try {
        // const { data } = await this.$store.dispatch('user/updateInfo', params);
        const { data } = await this.updateInfo(params);
        this.loading = false;
        if (data) {
          this.$message.success('更新成功');
        }
      } catch (error) {
        this.loading = false;
        throw error;
      }
    },
    // 上传图片（点击上传按钮）
    async getCorpImg({ data, filename }) {
      const formData = new FormData();
      formData.append('file', data, filename);
      const {
        data: { path },
      } = await upload(formData);
      this.form.avatar = path;
      this.$message.success('上传成功');
      this.modal.visible = false;
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  .form-container {
    flex: 1;
  }
  .avatar-container {
    width: 180px;
    height: 180px;
    margin-left: 100px;
    border-radius: 50%;
    box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    position: relative;
    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .avatar-hover {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 46px;
      color: blue;
      opacity: 0;
      transition: 500ms;
    }
    &:hover {
      .avatar-hover {
        opacity: 1;
      }
      .avatar {
        opacity: 0.6;
      }
    }
  }
}
</style>
