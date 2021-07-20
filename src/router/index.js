import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import MyTable from '../components/MyTable'

const routes = [
  {
    path: '/',
    redirect: '/about'
  }, {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/about",
        name: "about",
        title: '系统首页',
        component: () => import( /* webpackChunkName: "dashboard" */ "../views/About.vue")
      },{
        path: "/table",
        name: "myTable",
        title: '系统首页',
        component: () => import( /* webpackChunkName: "dashboard" */ "../components/MyTable.vue")
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
