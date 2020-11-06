import authColumns from './auth/index'

const columns = {
  ...authColumns
}

export default function (tableId) {
  if (tableId) {
    // 用户上去哪区划
    return columns[tableId]
  } else {
    return null
  }
}
