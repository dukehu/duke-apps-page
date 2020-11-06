// 角色相关表头
const columns = {
  'resource': [
    {
      title: '资源名称',
      field: 'name',
      treeNode: true,
      editRender: {
        name: '$input'
      }
    },
    {
      title: '资源编码',
      field: 'code',
      editRender: {
        name: '$input'
      }
    },
    {
      title: '资源类型',
      field: 'type',
      editRender: {
        name: '$select',
        options: [
          { value: '-1', label: '全部资源' },
          { value: '0', label: '服务' },
          { value: '1', label: '菜单' },
          { value: '2', label: '按钮' }
        ]
      }
    },
    {
      title: '资源备注',
      field: 'memo',
      editRender: {
        name: '$input'
      }
    }
  ]
}
export default columns
