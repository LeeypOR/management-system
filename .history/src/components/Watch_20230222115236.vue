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
            <button @click="delMarket(index)">
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
          <td>总价:{{ $total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive, computed } from 'vue'
type Shop = {
  name: string,
  num: number,
  price: number
}
let data = reactive<Shop[]>(
  [{
    name: "衣服",
    num: 1,
    price: 200
  }, {
    name: "裤子",
    num: 1,
    price: 150
  }, {
    name: "鞋子",
    num: 1,
    price: 300
  }]
)
let $total = ref(0)
const delMarket = (index:number) => {
  data.splice(index,1)
}
const addOrSub = (item:Shop,tip:boolean):void =>{
  if(item.num > 1 && !tip){
    item.num--
  }
  if(item.num < 999 && !!tip){
    item.num++
  }
}

  $total = computed<number>(()=>{
  return data.reduce((prev,next)=>{
    return prev + (next.num * next.price)
  },0)
})

</script>