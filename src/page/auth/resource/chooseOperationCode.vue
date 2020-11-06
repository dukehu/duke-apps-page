<template>
    <el-dialog
        width="80%"
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        @close="closeHandle"
        center>
        <span slot="title" class="dialog-title" style="font-size: 20px; font-weight: 900">
            操作码授权
        </span>
        <div style="text-align:center; height: 400px">
          <Split v-model="split">
            <div slot="left" style="height: 350px">
              <DTable
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
              </DTable>
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
    </el-dialog>
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
    },
    closeHandle () {
      this.$emit('update:visible', this.dialogVisible)
    }
  },
  created () {
  },
  mounted () {

  }
}
</script>

<style>
.v-modal {
    display: none;
}
.el-dialog__header {
  border-bottom: 1px solid #71626230;
  text-align: left;
}
</style>
