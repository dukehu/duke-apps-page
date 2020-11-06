export default [
  {
    path: '/user',
    name: 'User',
    meta: {
      requireAuth: true
    },
    component: () => import('@/page/auth/user/index.vue')
  },
  {
    path: '/role',
    name: 'Role',
    meta: {
      requireAuth: true
    },
    component: () => import('@/page/auth/role/index.vue')
  },
  {
    path: '/resource',
    name: 'Resource',
    meta: {
      requireAuth: true
    },
    component: () => import('@/page/auth/resource/index.vue')
  },
  {
    path: '/server',
    name: 'User',
    meta: {
      requireAuth: true
    },
    component: () => import('@/page/auth/user/index.vue')
  },
  {
    path: '/operationCode',
    name: 'OperationCode',
    meta: {
      requireAuth: true
    },
    component: () => import('@/page/auth/operationCode/index.vue')
  }
]
