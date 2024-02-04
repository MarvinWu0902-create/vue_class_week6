import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'productlist',
        name: 'productlist',
        component: () => import('../views/ProductListView.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/ProductView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'productlist',
        name: 'productlist-dashboard',
        component: () => import('../views/dashboard/ProductListView.vue')
      },
      {
        path: 'addproduct',
        name: 'addproduct',
        component: () => import('../views/dashboard/AddProductView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
