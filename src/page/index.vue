<!-- eslint-disable -->
<template>
    <div class="layout">
        <Layout>
            <Header></Header>
            <Layout :style="{padding: '0 50px', margin: '88px 30px 0 0'}">
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff',}">
                            <LeftMenu></LeftMenu>
                        </Sider>
                        <Content :style="{padding: '5px 24px', minHeight: '280px', background: '#fff'}">
                            <Breadcrumb></Breadcrumb>
                            <div style="margin: 50px 0; position: fixed; width: calc(100% - 364px); height: calc(100% - 300px);">
                                <keep-alive :include="includedComponents" :exclude="excludedComponents">
                                    <router-view v-if="$route.meta.keepAlive" :key="$route.name" />
                                </keep-alive>
                                <router-view v-if="!$route.meta.keepAlive" :key="$route.name" />
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
        </Layout>
    </div>
</div>
</template>

<script>
import Header from './common/Header'
import Breadcrumb from './common/Breadcrumb'
import LeftMenu from './common/Menu'
export default {
  components: {Header, Breadcrumb, LeftMenu},
  data () {
    return {
      includedComponents: [],
      excludedComponents: []
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
.ivu-layout.ivu-layout-has-sider {
    height: calc(100vh - 207px);
}
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-footer-center {
    text-align: center;
}
</style>
