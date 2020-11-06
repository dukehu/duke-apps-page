<!-- eslint-disable -->
<template>
    <Menu :active-name="activeName" theme="light" width="auto" :open-names="openNames" accordion>
        <Submenu v-for="subMenu in subMenus" :key="subMenu.id" :name="subMenu.id">
            <template slot="title">
                <Icon type="subMenu.icon"></Icon>
                {{ subMenu.name }}
            </template>
            <MenuItem 
                v-for="menuItem in subMenu.menuItems" 
                :key="menuItem.id" 
                :name="menuItem.id"
                :to="menuItem.url">
                {{ menuItem.name }}
            </MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'auth',
      openNames: ['auth'],
      subMenus: [
        {
          id: 'auth',
          name: '权限管理',
          icon: '',
          menuItems: [
            {id: 'user', name: '用户列表', icon: '', url: '/user'},
            {id: 'fw', name: '服务列表', icon: '', url: '/server'},
            {id: 'js', name: '角色列表', icon: '', url: '/role'},
            {id: 'zy', name: '资源列表', icon: '', url: '/resource'},
            {id: 'czm', name: '操作码列表', icon: '', url: '/operationCode'}
          ]
        },
        {
          id: 'file',
          name: '文件管理',
          icon: '',
          menuItems: [
            {id: 'files', name: '文件管理', icon: '', url: '/file'}
          ]
        }
      ]
    }
  },
  methods: {
    // 在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
    createdInit () {
      this.getMenuList()
    },
    // 在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
    mountedInit () {}
  },
  created () {},
  mounted () {}
}
</script>

<style>
.ivu-menu {
    font-size: 20px;
    text-align: left;
    z-index: 0;
}
.ivu-layout-sider-children {
  overflow: auto;
  height: 100%;
}
</style>
