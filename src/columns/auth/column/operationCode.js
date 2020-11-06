// 操作码相关表头
const columns = {
  'operationCode': [
    {
      title: '微服务',
      field: 'serviceId',
      width: 120,
      editRender: {
        name: '$input'
      }
    },
    {
      title: '控制器',
      field: 'controller',
      width: 270,
      editRender: {
        name: '$input'
      }
    },
    {
      title: '操作码名称',
      field: 'name',
      width: 270,
      editRender: {
        name: '$input'
      }
    },
    {
      title: '操作码',
      field: 'code',
      width: 270,
      editRender: {
        name: '$input'
      }
    },
    {
      title: '请求路径',
      field: 'url',
      width: 270,
      editRender: {
        name: '$input'
      }
    }
  ]
}
export default columns
