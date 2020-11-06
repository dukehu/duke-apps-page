<template>
    <DTable
        :ref="tableProps.ref"
        :table-id="tableProps.tableId"
        :service-id="tableProps.serviceId"
        :path="tableProps.path"
        :buttons="tableProps.buttons"
        :request-params="tableProps.requestParams">
        <template v-slot:toolbar>
          <el-select v-model="tableProps.requestParams.serviceId" placeholder="请选择微服务" @change="serviceChange">
            <el-option
              v-for="service in services"
              :key="service.id"
              :label="service.name"
              :value="service.id">
            </el-option>
          </el-select>
          <el-select v-model="tableProps.requestParams.controller" placeholder="请选择Controller">
            <el-option
              v-for="controller in controllers"
              :key="controller"
              :label="controller"
              :value="controller">
            </el-option>
          </el-select>
        </template>
      </DTable>
</template>

<script>
export default {
  data () {
    return {
      services: [
        { id: 'duke-blog', name: 'duke-blog' },
        { id: 'duke-admin', name: 'duke-admin' },
        { id: 'duke-storage', name: 'duke-storage' },
        { id: 'duke-auth', name: 'duke-auth' }
      ],
      controllers: [],
      serviceId: 'duke-blog',
      controller: '',
      tableProps: {
        ref: 'operationCode',
        tableId: 'operationCode',
        serviceId: 'duke-admin',
        path: '/api/admin/operation_code',
        requestParams: {
          serviceId: 'duke-admin',
          controller: ''
        },
        buttons: [
          { code: 'add', name: '新增', callback: this.doAdd, status: 'primary' },
          { code: 'modify', name: '修改', callback: this.doModify, status: 'info' },
          { code: 'delete', name: '删除', callback: this.doDel, status: 'danger' }
        ]
      }
    }
  },
  methods: {
    serviceChange (item) {
      this.tableProps.requestParams.controller = ''
      this.getControllers(item)
    },
    doAdd () {
      this.$XModal.message({ message: `新增`, status: 'success' })
    },
    doModify () {
      this.$XModal.message({ message: `修改`, status: 'success' })
    },
    doDel () {
      this.$XModal.message({ message: `删除`, status: 'success' })
    },
    createdInit () {
    },
    getControllers (item) {
      this.controllers = []
      this.$axios('get', '/api/admin/operation_code/controller/' + item, {}).then(res => {
        if (res.status === 200) {
          this.controllers = res.data
          this.loading = false
        } else {
          this.$XModal.message({ message: res.message, status: 'warning' })
          this.loading = false
        }
      })
        .catch(error => {
          console.log(error)
          this.loading = false
        })
    }
  },
  created () {
    this.createdInit()
  },
  mounted () {}
}
</script>

<style scoped>
</style>
