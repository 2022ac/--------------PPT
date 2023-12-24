<template>
    <div class="car">
        <h2>{{ person.name }}</h2>
        <h2>{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="car">
    import {ref,reactive,toRefs} from 'vue'
    let person=ref({
        name:'sayejiejei',
        age:12
    })
    // toRefs解构对象中的属性都是响应式的
    let {name,age}=toRefs(person.value)
    console.log(toRefs(person))
    function changeName() {
        name.value+='-'
    }
    function changeAge() {
        age.value+=1
    }
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