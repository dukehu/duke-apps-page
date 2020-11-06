<template>
      <el-select
        ref="selectRef"
        :disabled="disabled"
        :filter-method="selectFilter"
        :value="checkbox ? valueTitle : valueTitleStr"
        clearable
        filterable
        :multiple="checkbox"
        :multiple-limit="3"
        @click.native="selectFocus"
        @visible-change="visibleChangeHandle"
        @remove-tag="removeTagHandle"
      >
        <el-option :value="valueTitleStr" :label="valueTitleStr" @click.stop>
          <el-tree
            ref="selectTree"
            :show-checkbox="checkbox"
            :data="dataIn"
            :props="props"
            :node-key="props.value"
            :default-expanded-keys="defaultExpandedKey"
            :filter-node-method="filterNode"
            @node-click="handleNodeClick"
            @dblclick.native="dblNodeClick"
          />
        </el-option>
      </el-select>
</template>
<script>
export default {
  name: 'Table',
  props: {
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
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    checkbox: {
      type: Boolean,
      default () {
        return true
      }
    },
    isleaf: {
      // 限制单选只能选底级  多选只显示底级
      type: Boolean
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
      dataIn: this.data,
      defaultExpandedKey: [],
      curNode: {}, // 当前选中的节点
      valueTitle: [],
      valueTitleStr: ''
    }
  },
  methods: {
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
    // 下拉框出现/隐藏时触发
    visibleChangeHandle (value) {
      if (!value) {
        // 下拉收起
        if (this.checkbox) {
          let tmpStr = ''
          let tmpArr = []
          // 多选
          let checkedNodes = this.$refs.selectTree.getCheckedNodes()
          if (checkedNodes.length > 0) {
            let nodes = []
            checkedNodes.forEach(node => {
              if (node.isLeaf === 1) {
                nodes.push(node)
              }
            })
            if (nodes.length > 0) {
              nodes.forEach(node => {
                tmpArr.push(node.title)
                tmpStr += node.title
              })
            }
          }
          this.valueTitleStr = tmpStr
          this.valueTitle = tmpArr
        } else {
          // 单选
          this.curNode = this.$refs.selectTree.getCurrentNode()
          if (this.curNode !== null) {
            this.valueTitleStr = this.curNode.title
            console.log(this.valueTitleStr)
          }
        }
      }
    },
    selectFocus () {},
    // 点击事件
    handleNodeClick (node, curnode, e) {
      if (this.isleaf) {
        if (node['leaf']) {
          this.curNode = node
        }
      } else {
        this.curNode = node
      }
    },
    dblNodeClick () {},
    selectFilter () {},
    filterNode () {},
    // 多选模式下移除tag时触发
    removeTagHandle (tag) {
      console.log(this)
      console.log(tag)
    }
  },
  created () {
    this.initDatas()
  },
  mounted () {
  },
  watch: {
  }
}
</script>

<style scoped>
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: 154px;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
  color: #fff;
}
.el-select-dropdown__item.selected {
  font-weight: normal;
}
ul li >>> .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}
.el-tree-node__label {
  font-weight: normal;
}
.el-tree >>> .is-current .el-tree-node__label {
  color: #409eff;
  font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
  font-weight: normal;
}
.el-popper[x-placement^='bottom'] {
  margin-top: 4px;
}
</style>
