import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorDetails from "@/views/AuthorDetails.vue";
import Error404Page from "@/views/Error404Page.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // правильний спосіб подавати хук (для оптималізації)
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // зчитую name з url
    path: '/author/:name', // передаю name як props
    name: 'author',
    component: () => import("@/views/AuthorVue.vue"),
    children: [
      { path: '/:details/:name', name: 'author-details', component: AuthorDetails}
    ],
    // передаю props до компоненту AuthorVue
    props: true
  },

  {
    path: '/error',
    name: 'error',
    component: Error404Page,
  },

  {
    path: '/*', // завжди має бути останнім
    name: 'error-redirect',
    redirect: {name: 'error' },
  }
]

const router = new VueRouter({
  mode: 'history', // Додаємо режим історії
  routes
})

export default router
