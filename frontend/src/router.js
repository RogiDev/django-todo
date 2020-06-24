import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Login from "./components/Login";
import Register from "./components/Register";
import AuthModule from "./store/modules/Auth.module";
import store from "./store";


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{requireAuth:true}
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
     {
      path: '/register',
      name: 'register',
      component:Register
    }
  ]
});
router.beforeEach((to,from,next) => {
  if(to.matched.some(route => route.meta.requireAuth)){
    if(store.getters.isAuth){
      next();
    }else{
      router.replace('/login');
    }
  }else{
    next();
  }
});

export default router;
