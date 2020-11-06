<template>
    <el-card class="box-card">
        <div v-if="needTreeName" slot="header" class="clearfix">
          <span style="font-size: 17px; font-weight: 600; text-align">{{ treeName }}</span>
        </div>
        <el-tree
            ref="leftTree"
            show-checkbox
            :data="dataIn"
            :props="props"
            :node-key="props.value"
            @node-click="handleNodeClick"
            />
    </el-card>
</template>
<script>
export default {
  name: 'Table',
  props: {
    needTreeName: {
      type: Boolean,
      default () {
        return true
      }
    },
    props: {
      type: Object,
      default: () => {
        return {
          value: 'id', // ID字段名
          label: 'name', // 显示名称
          children: 'children' // 子级字段名
        }
      }
    },
    treeName: { // 树名称
      type: String,
      default () {
        return '我是一棵树'
      }
    },
    isServer: { // 数据是否从服务端请求
      type: Boolean,
      default () {
        return true
      }
    },
    serviceId: { // 微服务id
      type: String,
      default () {
        return ''
      }
    },
    path: { // 请求路径
      type: String,
      default () {
        return ''
      }
    },
    requestMethod: { // 请求方式
      type: String,
      default () {
        return 'GET'
      }
    },
    requestParams: { // 请求参数
      type: Object,
      default () {
        return {}
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      dataIn: this.data
    }
  },
  methods: {
    handleNodeClick (node, curnode, e) {
      this.curNode = node
    },
    // 初始化树数据
    initDatas () {
      if (this.isServer) {
        this.$axios(this.requestMethod, this.path, this.requestParams).then(res => {
          if (res.status === 200) {
            this.dataIn = res.data
          } else {
            this.$XModal.message({ message: res.message, status: 'warning' })
          }
        })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getSelected () {
      return this.curNode
    }
  },
  created () {
  },
  mounted () {
    this.initDatas()
  },
  watch: {
  }
}
</script>

<style>
ul li >>> .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}
.el-tree-node__label {
  font-weight: 700;
  font-size: 15px;
}
.el-tree >>> .is-current .el-tree-node__label {
  color: #409eff;
  font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
  font-weight: normal;
}
.el-card__header {
  background: #e8eaec;
  text-align: left;
  padding: 10x;
}
.el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
  box-shadow: unset;
}
</style>
