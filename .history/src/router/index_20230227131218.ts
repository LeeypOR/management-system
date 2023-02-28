import Main from '../pages/BasePage/Main.vue'





const routers = [
  {
    path:'/',
    name:"main",
    component:Main,

  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routers
})

export default router