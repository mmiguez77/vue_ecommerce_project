import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:categoryId',
      name: 'products',
      component: () => import('@/views/ItemListContainer.vue'),
      //props: true
    },
    {
      path: '/detail/:productId',
      name: 'detail',
      component: () => import('@/components/Item/Item.vue'),
      //props: true
    }
  ]
})

export default router
