import DTable from './table/Table'

const components = {
  DTable
}

const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

const Api = {
  install,
  componentsLib: components
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default Api
