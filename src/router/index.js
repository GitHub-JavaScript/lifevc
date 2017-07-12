import Vue from 'vue'
import Router from 'vue-router'
import Home from  '../components/Home.vue'
import AllProducts from  '../components/AllProducts.vue'
import Stroll from  '../components/Stroll.vue'
import ShoppingCart from  '../components/ShoppingCart.vue'
import UserCenter from  '../components/UserCenter.vue'
import Login from  '../components/Login.vue'
import Register from  '../components/Register.vue'
import ProductsDetails from '../components/ProductsDetails.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass :'active',

  routes: [
    { path: "/", redirect: '/Home' },
    // {
    //   path: '/Home',
    //   component: Home
    // },

    {
      path: '/Home',
      component: Home
    },
    {
      path: '/AllProducts',
      component: AllProducts
    },
    {
      path: '/ProductsDetails',
      component: ProductsDetails
    },
    {
      path: '/Stroll',
      component: Stroll
    },
    {
      path: '/ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/UserCenter',
      component: UserCenter
    },
    {
      path: '/Login',
      component: Login
    }
    ,
    {
      path: '/Register',
      component: Register
    }

  ]
})
