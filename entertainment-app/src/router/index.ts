import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '@/views/MoviesView.vue'
import TvSeries from '@/views/TvSeries.vue'
import BookmarkedView from '@/views/BookmarkedView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue'),
    },

    {
       path: '/movies',
        name: 'movies',
        component: MoviesView,
    },

    {
      path: '/tv-series',
       name: 'tv-series',
       component: TvSeries,
   },

   {
    path: '/bookmarked',
     name: 'bookmarked',
     component: BookmarkedView,
 },
    
   
    
  ],

  linkExactActiveClass: 'active'
})

export default router
