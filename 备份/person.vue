<template>
  <div class="person">
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h3>地址：{{ address }}</h3>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!-- 组件名字 -->
<!-- <script lang="ts">
export default {
  name: "person",
};
</script> -->
<!-- 相当于script中使用setup函数 并将你的数据最后return出去 -->
<script lang="ts" setup name="person">
import { ref } from 'vue'
// 想让那个数据是响应式的就需要将哪个数据包裹一下
// setup 中this 是undefined
//console.log('@@',this)

let name = ref("sanye");// 包一层ref() 就是基本类型的响应式数据
let age = ref(18);
let tel = 122222;// 数据 注意此时的数据不是响应式的
let address = "北京昌平区";// 数据 注意此时的数据不是响应式的
// 方法
function changeName() {
  name.value = "zhang-san";
}
function changeAge() {
  age.value += 1;
}
function showTel() {
  alert(tel);
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
