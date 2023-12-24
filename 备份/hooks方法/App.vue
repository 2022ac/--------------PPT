<template>
  <!-- html 结构 -->
  <!-- vue3 允许多个根标签 -->
  <div class="app">
    <Person/>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from './components/person.vue'
  import {onMounted, ref} from 'vue'
</script>

<style></style>