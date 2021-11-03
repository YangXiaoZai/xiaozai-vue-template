<!-- login -->
<template>
	<div class="container flex-center">
		<div class="login-container radius">
			<h3 class="color-fff font-28 text-center">后台管理系统登录</h3>

			<a-form-model
        ref="loginFrom"
        :rules="rules"
				:model="loginFrom"
			>
				<a-form-model-item prop='user'>
					<a-input
            ref='user'
            v-model="loginFrom.user"
            size="large"
            placeholder="请输入账号">
						<a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
					</a-input>
				</a-form-model-item>

				<a-form-model-item prop='password'>
					<a-input-password
            ref='password'
            size="large"
						v-model="loginFrom.password"
						type="password"
						placeholder="请输入密码"
            @keyup.enter.native="handleLogin"
					>
						<a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
					</a-input-password>
				</a-form-model-item>
        <a-form-model-item>
					<a-button type="primary" block size="large" @click="handleLogin" :loading='loading'>
            登录
          </a-button>
				</a-form-model-item>
			</a-form-model>

		</div>
	</div>
</template>

<script>
import { setToken } from '@/utils/auth';

export default {
  components: {},
  data() {
    return {
      redirect: '',
      loginFrom: {
        user: '',
        password: '',
      },
      rules: {
        user: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
      loading: false,
    };
  },
  computed: {},
  watch: {
    $route: {
      handler(route) {
        const { query } = route;
        this.redirect = query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    handleLogin() {
      this.$refs.loginFrom.validate((valid) => {
        if (valid) {
          this.loading = true;
          // 没有后台API支持，暂时先如此
          setToken('admin');
          this.$router.push(this.redirect || '/');

          // this.$store.dispatch('user/login', this.loginFrom)
          //   .then(() => {
          //     this.$router.push(this.redirect || '/');
          //   }).finally(() => {
          //     this.loading = false;
          //   });
        } else {
          console.log('未通过验证');
        }
      });
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (this.loginFrom.user === '') {
      this.$refs.user.focus();
    } else if (this.loginFrom.password === '') {
      this.$refs.password.focus();
    }
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.container{
  width: 100vw;
  height: 100vh;
  background-color: #283443;
  overflow: hidden;
  color: #fff;
  background: url(../../assets/login/login-bg.jpg) no-repeat center;
  background-size: cover;
  .login-container {
    width: 550px;
    max-width: 100%;
    margin: 35px;
    border: 1px solid transparent;
    background: rgba(0,0,0,.4);
    padding: 60px 30px;
  }
}
</style>
