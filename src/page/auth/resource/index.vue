<!-- eslint-disable -->
<template>
  <div style="height: 100%">
    <Table
        :ref="tableProps.ref"
        :table-id="tableProps.tableId"
        :service-id="tableProps.serviceId"
        :path="tableProps.path"
        :buttons="tableProps.buttons"
        :request-params="tableProps.requestParams"
        :is-server="tableProps.isServer"
        :table-data="tableProps.datas"
        :table-config="tableProps.tableConfig"
        :option-row="tableProps.optionRow"
        :tree-table="tableProps.treeTable">
    </Table>
    <Edit v-if="editDialogVisable" :visible.sync="editDialogVisable" :resource-parent-id="leftTreeCurNode.id" />
    <ChooseOperationCode v-if="chooseOperatioCodeDialogVisible" :visible.sync="chooseOperatioCodeDialogVisible" />
  </div>
</template>

<script>
import Edit from './edit'
import ChooseOperationCode from '../resource/chooseOperationCode'
export default {
  components: {Edit, ChooseOperationCode},
  data () {
    return {
      controller: '',
      // 表格配置
      tableProps: {
        ref: 'resource',
        treeTable: true,
        optionRow: true,
        tableId: 'resource',
        serviceId: 'duke-admin',
        path: '/api/admin/resource/tree',
        requestParams: {
          'parentId': 'all'
        },
        buttons: [
          { code: 'add', name: '新增', callback: this.doAdd, status: 'primary' },
          { code: 'authorize', name: '操作码授权', callback: this.doAuthorize },
          { code: 'modify', name: '修改', callback: this.doModify, status: 'info' },
          { code: 'delete', name: '删除', callback: this.doDel, status: 'danger' }
        ],
        isServer: true,
        datas: [{'serviceId': '123321', children: [{}, {}, {}]}, {}, {}],
        // 渲染器
        tableConfig: {
          renderers: {
            optionRow: {
              renderDefault (h, cellRender, params, context) {
                let self =
                context.$grid.$parent.$refs.xGrid.$parent.$parent.$parent
                let { row, column } = params
                return [
                  <a
                    class="optionRow-delete fn-inline"
                    onClick={() => self.doDeleteFile({ row, column })}
                  >
                  删除
                  </a>,
                  <span>&emsp;</span>,
                  <a
                    class="optionRow-detail fn-inline"
                    onClick={() => self.doDownload({ row, column })}
                  >
                  下载
                  </a>
                ]
              }
            }
          }}
      },
      editDialogVisable: false,
      props: {
        value: 'id', // ID字段名
        label: 'name', // 显示名称
        children: 'children' // 子级字段名
      },
      defaultExpandedKey: [],
      leftTreeCurNode: {},
      chooseOperatioCodeDialogVisible: false
    }
  },
  methods: {
    // 操作码授权
    doAuthorize (self, xGrid) {
      let tmpDatas = self.getSelectionData()
      let datas = []
      if (tmpDatas.length > 0) {
        tmpDatas.forEach(data => {
          if (data.type === 1 || data.type === 2) {
            datas.push(data)
          }
        })
      }
      if (datas.length !== 1) {
        this.$XModal.message({ message: '请选择一条菜单/按钮资源进行授权！', status: 'warning' })
        return
      }
      // 获取表格选中数据
      this.chooseOperatioCodeDialogVisible = true
    },
    // 新增资源
    doAdd () {
      this.editDialogVisable = true
    },
    doModify () {
      this.$XModal.message({ message: `修改`, status: 'success' })
    },
    doDel () {
      this.$XModal.message({ message: `删除`, status: 'success' })
    },
    // 树节点单击方法
    handleNodeClick () {}
  },
  created () {},
  mounted () {}
}
</script>

<style scoped>
</style>
