import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'


const routes:Array<RouteRecordRaw> = [
  {
    path:"/",
    component:()=> import('../pages/BasePage/Main.vue')
  }
]


const router = createRouter({
  history:createWebHistory(),
  routes
})


export default router


// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routers
// })

// export default router