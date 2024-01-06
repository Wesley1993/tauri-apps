import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../layout/default-layout.vue'),
      children: [

      ]
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  },
})


export default router