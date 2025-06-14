import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import WorksView from './views/WorksView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/works', component: WorksView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router