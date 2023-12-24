<template>
    <div class="car">
        <h2>一辆{{ car.brand }}车,价钱{{ car.price }}万元</h2>
        <button @click="changeValue">修改车的价值</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" 
            :key="game.id">
                {{ game.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改游戏</button>
    </div>
</template>

<script lang="ts" setup name="car">
import { ref, reactive } from 'vue'
// 对于一个普通的对象来说如果想让
//它成为响应式对象就需要将他使用reactive()就行包裹
let car = ref({ brand: 'sanye', price: 100 })
let games = ref([
    { id: '01sanye', name: '王者' },
    { id: '02sanye', name: '原神' },
    { id: '03sanye', name: '启动' }
])
// 修改ref 修饰的响应式数据 需要.value 拿到数据
function changeValue() {
    car.value.brand = 'sanyejiejei',
    car.value.price += 10
}
function changeFirstGame() {
    games.value[0].name='sanyejiejeie'
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