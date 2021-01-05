import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../components/Home";
import User from "../components/User";
import Liuyanban from "../components/Liuyanban";
import Xinxi from "../components/Xinxi";
import Add from "../components/Add";

Vue.use(Router)

export default new Router({
  routes: [
      {path:'/home',component:Home},
      {path:'/user',component:User},
      {path:'/liu',component:Liuyanban},
      {path:'/xinxi',component:Xinxi},
      {path:'/add',component:Add},
  ]
})
