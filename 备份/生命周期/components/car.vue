<template>
    <!-- watch 和watchEffect -->
    <div class="car">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }}--{{ item.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="car">
    import {defineProps,withDefaults} from 'vue'
    import {type Persons} from '@/types'
    // 接收a 同时将props保存起来
    //defineProps(['a','b'])
    // 接受a,b,和list
    //let x=defineProps(['a','b','list'])
    
    // 只接受list+类型的限制
    //defineProps<{list:Persons}>()

    // 接受list + 限制类型 +限制必要性 +指定默认值
    // 必须使用函数 有一个返回值的形式来写
    withDefaults(defineProps<{list?:Persons}>(),{
        list:()=>[{id:'ashd01',name:'sanyejiejie',age:19}]
    })
</script>
<!-- 局部样式 防止冲突 -->
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