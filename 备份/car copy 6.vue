<template>
    <div class="car">
        <!-- 监视对象的某个属性 或者监视整个对象 -->
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>车的名称：{{ person.car.c1 }}  {{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改车</button>
    </div>
</template>

<script lang="ts" setup name="car">
import {reactive,watch} from 'vue'
    let person=reactive({
        name:'张三',
        age:18,
        car:{
            c1:'奔驰',
            c2:'宝马'
        }
    })
    function changeName() {
        person.name+='-'
    }
    function changeAge() {
        person.age+=1
    }
    function changeC1() {
        person.car.c1='sanyejiejie'
    }
    function changeC2() {
        person.car.c2='acoierLover'
    }
    function changeCar() {
        Object.assign(person,{name:'find',age:21,car:{c1:'Benchi',c2:'baoma'}})
    }
    // 监视响应式对象中的某个属性 并且属性是基本类型的 写成函数式的
    // watch(()=>{return person.name},(newValue,oldValue)=>{
    //     console.log('person.name变化了',newValue,oldValue)
    // })

    /**
     * 一个函数，返回一个值
    一个 ref
    一个响应式对象
    ...或是由以上类型的值组成的数组
     */
    // 监视的是对象里的属性 最好写成函数式 若是对象监视的是地址值 需要关注对象的
    // 内部 需要手动开启深度监视
    watch(()=>person.car,(newValue,oldValue)=>{
        console.log('person.car变化了',newValue,oldValue)
    },{deep:true})
</script>

<style scoped>
.car {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}

li {
    list-style: none;
    font-size: 20px;
}
</style>