<template>
<div>
    <el-dialog
        width="30%"
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        @close="closeHandle"
        center>
            <span slot="title" class="dialog-title" style="font-size: 20px; font-weight: 900">
                新增资源
                <el-divider></el-divider>
            </span>
            <el-form ref="form" :model="resource" label-width="80px">
              <el-form-item label="父级资源">
                <TreeInput
                  :ref="resourceTreeIuputProps.ref"
                  :checkbox="resourceTreeIuputProps.checkbox"
                  :service-id="resourceTreeIuputProps.serviceId"
                  :path="resourceTreeIuputProps.path"
                  :request-params="resourceTreeIuputProps.requestParams" />
              </el-form-item>
              <el-form-item label="资源名称">
                <el-input
                  placeholder="请输入资源编码"
                  v-model="resource.name"
                  clearable>
                </el-input>
              </el-form-item>
              <el-form-item label="资源编码">
                <el-input
                  placeholder="请输入资源编码"
                  v-model="resource.code"
                  clearable>
                </el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-divider></el-divider>
                <el-button @click="dialogVisible = false" size="medium">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
            </span>
    </el-dialog>
</div>
</template>

<script>
import TreeInput from '@/components/treeinput/TreeInput'
export default {
  components: {TreeInput},
  props: {
    visible: {
      type: Boolean,
      default () {
        return false
      }
    },
    resourceParentId: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      resources: [],
      dialogVisible: this.visible,
      resource: {
        name: '',
        region: ''
      },
      resourceTreeIuputProps: {
        ref: 'resourceTreeIuput',
        checkbox: false,
        serviceId: 'duke-admin',
        path: '/api/admin/resource/tree',
        requestParams: {
          'parentId': this.resourceParentId
        }
      }
    }
  },
  methods: {
    // 弹窗关闭回调
    closeHandle () {
      this.$emit('update:visible', this.dialogVisible)
    },
    // 选择操作码
    chooseOperatioCode () {
      this.chooseOperatioCodeDialogVisible = true
    }
  },
  created () {
  },
  mounted () {}
}
</script>

<style>
.v-modal {
    display: none;
}
.el-dialog--center .el-dialog__footer {
    text-align: right;
}
.el-dialog__header {
    text-align: left;
}
</style>
