import auth from '@/router/children/auth'
import file from '@/router/children/file'

export default {
  path: '/',
  name: '',
  component: () => import('@/page/index.vue'), // 主内容
  meta: {
    requireAuth: true
  },
  children: [
    ...auth,
    ...file
  ]
}
