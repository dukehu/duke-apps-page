<template>
    <Dialog
      :visible.sync="dialogVisible"
      :title="title"
      :confirmCallBack="confirmCallBack">
      <template v-slot:content>
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
      </template>
    </Dialog>
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
    title: {
      type: String,
      defalut () {
        return '新增资源'
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
      dialogVisible: this.visible,
      resources: [],
      resource: {
        name: '',
        region: ''
      },
      // 资源书相关数据
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
    // 选择操作码
    chooseOperatioCode () {
      this.chooseOperatioCodeDialogVisible = true
    },
    // 弹窗确认回掉函数
    confirmCallBack () {

    }
  },
  created () {
  },
  mounted () {},
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
