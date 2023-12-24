<template>
  <!-- html 结构 -->
  <!-- vue3 允许多个根标签 -->
  <div class="app">
    <Person v-if="isShow"/>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from './components/person.vue'
  import {onMounted, ref} from 'vue'
  let isShow=ref(true)
  // 挂载完毕
  onMounted(()=>{
    console.log('父---挂载完毕')
  })
</script>

<style></style>