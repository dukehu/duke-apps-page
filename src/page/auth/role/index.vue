<template>
  <div style="height: 100%">
    <Table
        :ref="tableProps.ref"
        :table-id="tableProps.tableId"
        :service-id="tableProps.serviceId"
        :path="tableProps.path"
        :buttons="tableProps.buttons" />
    <Edit v-if="editRoleDialogVisible" :visible.sync="editRoleDialogVisible" />
  </div>
</template>

<script>
import Edit from './edit'
export default {
  components: {Edit},
  data () {
    return {
      tableProps: {
        ref: 'role',
        tableId: 'role',
        serviceId: 'duke-admin',
        path: '/api/admin/role',
        requestParams: {},
        buttons: [
          { code: 'add', name: '新增', callback: this.doAdd, status: 'primary' },
          { code: 'modify', name: '修改', callback: this.doModify, status: 'info' },
          { code: 'delete', name: '删除', callback: this.doDel, status: 'danger' }
        ]
      },
      editRoleDialogVisible: false
    }
  },
  methods: {
    doAdd () {
      this.editRoleDialogVisible = true
      this.$XModal.message({ message: `新增`, status: 'success' })
    },
    doModify () {
      this.editRoleDialogVisible = true
      this.$XModal.message({ message: `修改`, status: 'success' })
    },
    doDel () {
      this.$XModal.message({ message: `删除`, status: 'success' })
    }
  },
  created () {},
  mounted () {}
}
</script>

<style scoped>
</style>
