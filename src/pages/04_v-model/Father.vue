<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- 数据到页面 页面到数据 双向绑定 v-model 绑定到html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- v-model 的底层原理 -->
    <!-- <input type="text" :value="username" @input="username=(<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用到组件标签上 input 就是一个事件名-->
    <AtguiguInputVue :modelValue="username" @input="username=$event"/>
  </div>
</template>

<script setup lang="ts" name="Father">
    import {ref} from 'vue'
    import AtguiguInputVue from './AtguiguInput.vue';
    // 数据
    let username=ref('zhangsan')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
