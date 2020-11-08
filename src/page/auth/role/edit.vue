<template>
  <Dialog
    :visible.sync="dialogVisible"
    :title="title"
    :confirmCallBack="confirmCallBack">
    <template v-slot:content>
      123456
    </template>
  </Dialog>
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
    title: {
      type: String,
      default () {
        return '新增角色'
      }
    }
  },
  data () {
    return {
      dialogVisible: this.visible
    }
  },
  methods: {
    confirmCallBack () {
      alert(1)
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
