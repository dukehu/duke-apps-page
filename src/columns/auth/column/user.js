// 用户相关表头
const columns = {
  'user': [
    {
      title: '账号',
      field: 'loginName',
      editRender: {
        name: '$input'
      }
    },
    {
      title: '姓名',
      field: 'realName',
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
          label: '正常'
        }, {
          value: '0',
          label: '不正常'
        }]
      }
    },
    {
      title: '性别',
      field: 'gender',
      editRender: {
        name: '$select',
        options: [{
          value: '1',
          label: '男孩'
        }, {
          value: '0',
          label: '女孩'
        }]
      }
    },
    {
      title: '地址',
      field: 'url',
      editRender: {
        name: '$input'
      }
    },
    {
      title: '注册时间',
      field: 'controller',
      editRender: {
        name: '$input'
      }
    }
  ]
}
export default columns
