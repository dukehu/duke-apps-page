// 角色相关表头
const columns = {
  'role': [
    {
      title: '名称',
      field: 'name',
      editRender: {
        name: '$input'
      }
    },
    {
      title: '角色类型',
      field: 'roleType',
      editRender: {
        name: '$input'
      }
    },
    {
      title: '状态',
      field: 'status',
      editRender: {
        name: '$select',
        options: [{
          value: '1',
          label: '激活'
        }, {
          value: '0',
          label: '未激活'
        }]
      }
    },
    {
      title: '描述',
      field: 'memo',
      editRender: {
        name: '$input'
      }
    }
  ]
}
export default columns
