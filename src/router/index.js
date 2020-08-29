import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home'
import Admin from '@/components/pages/Admin'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import {auth} from '@/firebase'

const routes = [
  {path: '/', component: Home },
  {path: '/admin', component: Admin, meta: {needAuth: true} },
  {path: '/login', component: Login },
  {path: '/register', component: Register }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
const isAuth = auth.currentUser
const isProtected = to.matched.some(route=> route.meta.needAuth)

if(!isAuth && isProtected ){
  next('/login')
}else{
  next()
}


})

export default router
