<!-- <script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style> -->

<template><!-- 渲染元素 -->
  <div>
    <table border style="width: 1000px;">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.name }}</td>
          <td>
            <button @click="addOrSub(item,false)" style="margin-right: 20px;">-</button>
            {{ item.num }}
            <button @click="addOrSub(item,true)" style="margin-left: 20px;">+</button>
          </td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="delMarket()">
              删除
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>总价</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
type Shop = {
  name: string,
  num: number,
  price: number
}
let data = reactive<Shop[]>(
  [{
    name: "衣服",
    num: 10,
    price: 200
  }, {
    name: "裤子",
    num: 100,
    price: 150
  }, {
    name: "鞋子",
    num: 150,
    price: 300
  }]
)

const delMarket = () => {

}
const addOrSub = (item:Shop,tip:boolean):void =>{
  if(item.num > 1 && !tip){
    item.num--
  }
  if(item.num < 999 && !!tip){
    item.num++
  }
}
</script>