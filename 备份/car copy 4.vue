<template>
    <div class="car">
        <!-- <h2>情况一:监视ref定义的【基本类型】数据</h2>
        <h2>当前求和的数据{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button> -->
        <h2>情形二:监视ref定义的【对象类型】数据</h2>
        <h2>姓名:{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人的数据</button>
    </div>
</template>

<script lang="ts" setup name="car">
    // import {ref,watch,computed} from 'vue'
    // // 数据
    // let sum=ref(0)
    // // 方法
    // function changeSum() {
    //     sum.value+=1
    // }
    // // 监视
    // const stopWatch=watch(sum,(newValue,oldValue)=>{
    //     console.log('sum变化了',newValue,oldValue)
    //     if(newValue>=10) {
    //         stopWatch()
    //     }
    // })
    import {ref,watch} from 'vue'
    // 数据
    let person=ref({
        name:'zhang-san',
        age:12
    })
    // 方法
    function changeName() {
        person.value.name='sanye'
    }
    function changeAge() {
        person.value.age+=1
    }
    function changePerson() {
        person.value={name:'sanyejiejei',age:18}
    }
    // 监视
    // watch 第一个参数是：被监视的数据
    // watch 第二个参数是：监视的回调
    // watch 第三个参数 配置对象 (deep、immediate等等)
    watch(person,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue)
    })
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