import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import NotFound from '../views/NotFound.vue'
import ProjectDetailsview from '../views/ProjectDetailsview.vue'
import BlogDetails from '../views/BlogDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project',
    name: 'project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
  {
    path: '/projectdetails',
    name: 'ProjectDetailsview',
    component: ProjectDetailsview
  },
  {
    path: '/blogdetails',
    name: 'BlogDetails',
    component: BlogDetails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
