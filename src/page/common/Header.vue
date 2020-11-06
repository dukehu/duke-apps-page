<!-- eslint-disable -->
<style scoped>
.ivu-layout-header {
    background-color: #fff;
}
.ivu-avatar-large {
    width: 50px;
    height: 50px;
    line-height: 50px;
}
</style>
<template>
    <Header :style="{position: 'fixed', width: '100%'}">
        <Dropdown style="float: right">
            <div>
                <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
                <!-- <Icon type="md-arrow-dropdown" size="28" /> -->
            </div>
            <DropdownMenu slot="list">
                <DropdownItem><Icon type="md-contact" size="18" />个人信息</DropdownItem>
                <DropdownItem><Icon type="md-finger-print" size="18" />修改密码</DropdownItem>
                <DropdownItem divided><a href="javascript:void(0)" @click="logout"><Icon type="md-log-out" size="18" />退出登陆</a></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </Header>
</template>

<script>
export default {
  data () {
    return {
      user: {

      }
    }
  },
  methods: {
    // 退出登录
    logout () {
      this.$axios('post', '/api/auth/sign_out', {})
        .then(res => {
          if (res.status === 200) {
            console.log(this.$router)
            this.$XModal.message({ message: '退出成功', status: 'success' })
            // 登录成功
            this.$router.push({path: '/login'})
          } else {
            this.$XModal.message({ message: res.message, status: 'warning' })
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.user = {
      loginName: this.$cookies.get('_d_login_name_'),
      avatar: this.$cookies.get('_d_avatar_'),
      userId: this.$cookies.get('_d_user_id_')
    }
    console.log(this.user)
  }
}
</script>
