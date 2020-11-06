export default [
  {
    path: '/file',
    name: 'File',
    meta: {
      requireAuth: true
    },
    component: () => import('@/page/file/index.vue')
  }
]
