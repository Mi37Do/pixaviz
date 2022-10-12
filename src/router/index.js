import { createRouter, createWebHistory } from 'vue-router'
import PreloadPage from '../views/PreloadPage.vue'
import PixavizView from '../views/PixavizView.vue'

const routes = [
  {
    path: '/',
    name: 'preloadpage',
    component: PreloadPage
  },
  {
    path: '/pixaviz',
    name: 'pixaviz',
    component: PixavizView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
