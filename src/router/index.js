import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = ()=> import('../view/home/Home')
const Category = () => import("../view/category/Category")
const Cars = ()=> import('../view/cars/Cars')
const Me = ()=> import('../view/me/Me')
const Details = ()=> import('../view/details/Details')

  const routes = [
    { path: '', redirect: '/home'},
    { 
      path: '/home', 
      component: Home 
    },
    { 
      path: '/category',
      component: Category
    },
    { 
      path: '/cars',
      component: Cars
    },
    {
      path: '/me', 
      component: Me
    },
    {
      path: '/details/:id', 
      component: Details
    }
  ]

  const router = new Router({
    routes,
    mode : 'history',
    base: "/mail"//对应服务器项目目录
  })

export default router
