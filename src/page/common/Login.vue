<!-- 登录页组件 -->
<!-- eslint-disable -->
<template>
    <div class="login">
        <Card style="width: 20%; height: 30%; position: absolute; top: 20%; left: 40%;">
            <p style="font-size: 25px" slot="title">
                登陆/注册
            </p>
            <vxe-form ref="loginForm" :data="user" :rules="rules" title-align="right" title-width="100">
                <vxe-form-item field="username">
                    <template v-slot="scope">
                        <vxe-input
                            placeholder="请输入用户名"
                            v-model="user.username"
                            maxlength="20"
                            clearable
                            @input="$refs.loginForm.updateStatus(scope)">
                        </vxe-input>              
                    </template>
                </vxe-form-item>
                <vxe-form-item field="password">
                    <template v-slot="scope">
                        <vxe-input
                            placeholder="请输入密码"
                            v-model="user.password"
                            maxlength="20"
                            type="password"
                            clearable
                            @input="$refs.loginForm.updateStatus(scope)">>
                        </vxe-input>
                    </template>
                </vxe-form-item>
            </vxe-form>
            <el-button type="primary" @click="login">登录</el-button>
        </Card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      redirectTo: '',
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入名称' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符' }
        ]
      }
    }
  },
  methods: {
    // 登录
    login () {
      this.$axios('post', '/api/auth/sign_in', this.user)
        .then(res => {
          if (res.status === 200) {
            this.$XModal.message({ message: '登录成功，即将跳转到登录页', status: 'success' })
            // 登录成功
            this.$router.push({path: '/user'})
          } else {
            this.$XModal.message({ message: res.message, status: 'warning' })
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirectTo = route.query.redirect
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.login{
    width: 100%;
    height: calc(100vh);
    background-color:#f5f7f9;
}
.vxe-input {
    font-size: 17px;
    height: 43px;
    width: 280px;
}
</style>
