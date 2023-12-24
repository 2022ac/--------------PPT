<template>
  <!-- html 结构 -->
  <!-- vue3 允许多个根标签 -->
  <div class="app">
    <!-- <Person /> -->
    <Car a="haha" b="sanye"/>
  </div>
</template>

<script lang="ts" setup name="App">
  import Car from './components/car.vue'
  import {reactive} from 'vue'
  import {type Persons} from '@/types'
  let personList=reactive<Persons>([
    {id:'asdasd01',name:'张三',age:18},
    {id:'asdasd02',name:'王三',age:19},
    {id:'asdsdd03',name:'李武',age:22,x:12}
  ])
</script>

<style></style>