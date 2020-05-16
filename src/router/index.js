import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Meetings from '../views/Meetings'
import Register from '../views/Register'
import Images from '../views/Images'
import CategoryImage from '../views/CategoryImages'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/images',
    name: 'images',
    component: Images
  },
  {
    path: '/images/:id',
    name: 'image',
    component: CategoryImage,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/meetings',
    name: 'meetings',
    component: Meetings
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '*',
    redirect: "//"
  }
  
]

const router = new VueRouter({
  routes
})

export default router
