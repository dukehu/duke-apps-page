<template>
  <div>
      <el-dialog
          :width="width"
          :visible.sync="dialogVisible"
          :close-on-click-modal="false"
          @close="closeHandle"
          center>
              <span slot="title" class="dialog-title" style="font-size: 15px; font-weight: 900">
                  {{title}}
              </span>
              <slot name="content">
                这里是内容
              </slot>
              <span v-if="footer" slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                  <el-button type="primary" @click="confirmCallBack" size="small">确 定</el-button>
              </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default () {
        return false
      }
    },
    width: { // 宽度
      type: String,
      default () {
        return '30%'
      }
    },
    title: { // 弹窗title
      type: String,
      default () {
        return '我是一个弹窗'
      }
    },
    confirmCallBack: { // 确认回调函数
      type: Function
    },
    // 是否需要footer
    footer: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      dialogVisible: this.visible
    }
  },
  methods: {
    // 弹窗关闭回调
    closeHandle () {
      this.$emit('update:visible', this.dialogVisible)
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
.el-dialog__header {
  border-bottom: 1px solid #71626230;
  text-align: left;
}
.el-dialog--center .el-dialog__footer {
  border-top: 1px solid #71626230;
  text-align: right;
}
.el-dialog__footer {
  padding: 5px 5px;
}
</style>
