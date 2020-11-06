import user from './column/user'
import operationCode from './column/operationCode'
import resource from './column/resource'
import role from './column/role'

const columns = {
  ...user,
  ...operationCode,
  ...resource,
  ...role
}

export default columns
