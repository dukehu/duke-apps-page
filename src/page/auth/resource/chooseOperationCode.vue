<template>
  <Dialog
    :visible.sync="dialogVisible"
    title="操作码授权"
    width="90%"
    footer="false">
      <template v-slot:content>
        <div style="text-align:center; height: 400px">
          <Split v-model="split">
            <div slot="left" style="height: 350px">
              <Table
                :ref="unChoosedOperationTableProps.ref"
                :table-id="unChoosedOperationTableProps.tableId"
                :service-id="unChoosedOperationTableProps.serviceId"
                :path="unChoosedOperationTableProps.path"
                :buttons="unChoosedOperationTableProps.buttons"
                :request-params="requestParams"
                :toolbar-config="{}">
                  <template v-slot:toolbar>
                    <RadioGroup v-model="requestMethod" @on-change="requestMethodChange" type="button">
                    <Radio label="GET"></Radio>
                    <Radio label="POST"></Radio>
                    <Radio label="PUT"></Radio>
                    <Radio label="DELETE"></Radio>
                    </RadioGroup>
                    <Input suffix="ios-search" placeholder="Enter PATH" style="width: 50%"/>
                  </template>
              </Table>
            </div>
            <div slot="right" style="height: 340px">
              <LeftTree
                :need-tree-name="false"
                :ref="leftTreeProps.ref"
                :service-id="leftTreeProps.serviceId"
                :path="leftTreeProps.path"
                :request-params="leftTreeProps.requestParams" />
            </div>
          </Split>
        </div>
      </template>
  </Dialog>
</template>

<script>
import LeftTree from '@/components/lefttree/LeftTree'
export default {
  components: {LeftTree},
  props: {
    visible: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      requestMethod: 'GET',
      requestParams: {
        requestMethod: 'GET'
      },
      unChoosedOperationTableProps: {
        ref: 'unChoosedOperation',
        tableId: 'operationCode',
        serviceId: 'duke-admin',
        path: '/api/admin/operation_code/request_method_url',
        isServer: true
      },
      dialogVisible: this.visible,
      split: 0.7,
      leftTreeProps: {
        ref: 'resourceLeftTree',
        serviceId: 'duke-admin',
        path: '/api/admin/resource/tree',
        requestParams: {
          'parentId': 'all'
        }
      }
    }
  },
  methods: {
    // 获取已选择的操作码
    getChoosedOperationCodes () {},
    requestMethodChange () {
      this.requestParams = {
        requestMethod: this.requestMethod
      }
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {
    dialogVisible: {
      handler (newvalue) {
        this.$emit('update:visible', newvalue)
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style>
</style>
