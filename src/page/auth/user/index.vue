<template>
    <Table
        :ref="tableProps.ref"
        :table-id="tableProps.tableId"
        :service-id="tableProps.serviceId"
        :path="tableProps.path"
        :buttons="tableProps.buttons" />
</template>

<script>
export default {
  data () {
    return {
      tableProps: {
        ref: 'user',
        tableId: 'user',
        serviceId: 'duke-admin',
        path: '/api/admin/user',
        requestParams: {},
        buttons: [
          { code: 'add', name: '新增', callback: this.doAdd, status: 'primary' },
          { code: 'modify', name: '修改', callback: this.doModify, status: 'info' },
          { code: 'delete', name: '删除', callback: this.doDel, status: 'danger' }
        ]
      }
    }
  },
  methods: {
    doAdd () {
      this.$XModal.message({ message: `新增`, status: 'success' })
    },
    doModify () {
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
