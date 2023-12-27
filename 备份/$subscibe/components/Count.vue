<template>
    <div class="count">
        <h2>当前求和为:{{ sum }},放大10背后:{{ bigSum }}</h2>
        <h3>欢迎来到：{{ school }},坐落于：{{ address }} 大写是：{{ upperSchool }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup name="App">
    import {ref,toRefs} from 'vue'
    // 导入useCountStore
    import {useCountStore} from '@/store/count'
    import {storeToRefs} from 'pinia'
    // 使用 useCountStore
    const countStore=useCountStore()
    const {sum,school,address,bigSum,upperSchool}=storeToRefs(countStore)
    // 可以比较这两者的区别
    //console.log(storeToRefs(countStore))
    //console.log(toRefs(countStore))
    // 数据
    let n=ref(1)
    // 方法
    function add() {
        countStore.increment(n.value)
    }
    function minus() {
        countStore.sum-=n.value
    }
</script>

<style scoped>
    .count {
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select,button {
        margin: 0 5px;
        height: 30px;
    }
</style>