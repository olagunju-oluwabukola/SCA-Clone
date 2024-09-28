import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: ()=> import('../Views/AboutView.vue')
    },
    {
      path: '/Team',
      name: 'team',
      component: () => import('../Views/TeamView.vue')
    },
    {
      path: '/School of Applied Skills',
      name: 'SOA',
      component: () => import('../Views/SOAView.vue')
    },
    {
      path: '/School of Product',
      name: 'SOP',
      component: () => import('../Views/SOPView.vue')
    },
    {
      path: '/School of Engineering',
      name: 'SOP',
      component: () => import('../Views/SOEView.vue')
    },
    {
      path: '/Volounteer',
      name: 'Volounteer',
      component: () => import('../Views/VolounteerView.vue')
    },
    {
      path: '/Events',
      name: 'events',
      component: () => import('../Views/EventsView.vue')
    },
    {
      path: '/initiatives',
      name: 'initiatives',
      component: () => import('../Views/Initiatives.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../Views/CommunityView.vue')
    },
    {
      path: '/chapters',
      name: 'chapters',
      component: () => import('../Views/ChaptersView.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../Views/JobsView.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../Views/DonateView.vue')
    },
  ]
})

export default router
