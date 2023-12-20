<template>
  <!-- html 结构 -->
  <!-- vue3 允许多个根标签 -->
  <div class="app">
    <Person />
    <Person />
    <br>
    <Car/>
  </div>
</template>

<script lang="ts">
import Person from './components/person.vue'
import Car from './components/car.vue'
// js 或者 ts
export default {
  name: 'App',//组件名
  components: { Person,Car }//注册组件
}
</script>

<style></style>