import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
console.log(123123)
const fn = function(name:string,age:number = 30):string{
  return name + age
}

let a = fn('张三')
console.log(a)

createApp(App).mount('#app')

