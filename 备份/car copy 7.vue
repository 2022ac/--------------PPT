<template>
    <div class="car">
        <!-- 监视上述多个数据 -->
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
    // 监视多个属性的情况
    watch([()=>person.name,person.car,()=>person.age],(newValue,oldValue)=>{
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