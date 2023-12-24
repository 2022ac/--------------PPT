<template>
    <div class="car">
        <h2>一辆{{ car.brand }}车,价钱{{ car.price }}万元</h2>
        <button @click="changeValue">修改车的价值</button>
        <button @click="changeCar">修改车</button>
        <h3>sum的值是{{ sum }}</h3>
        <button @click="changeSum">修改sum的值</button>
    </div>
</template>

<script lang="ts" setup name="car">
import { ref, reactive } from 'vue'
// 对于一个普通的对象来说如果想让
//它成为响应式对象就需要将他使用reactive()就行包裹
let car = ref({ brand: 'sanye', price: 100 })
let sum=ref(0)
// 修改ref 修饰的响应式数据 需要.value 拿到数据
function changeValue() {
    car.value.brand = 'sanyejiejei',
    car.value.price += 10
}
function changeSum() {
    sum.value+=1
}
function changeCar() {
    // Object.assign 后面这个对象的属性修改前面的属性
    //Object.assign(car.value,{brand:'sanyejijeiejieje',price:21898})
    car.value={brand:'sanyejiejiejeie',price:123434}
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