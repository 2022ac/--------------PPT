<template>
    <!-- watch 和watchEffect -->
    <div class="car">
        ???
    </div>
</template>

<script lang="ts" setup name="car">
    import {ref,defineExpose} from 'vue'
    // 官方为了防止 你把接口和实体搞混
    import {type PersonInter,type Persons} from '@/types'
    let person:PersonInter={id:'acoierLover',name:'张三',age:18}
    let personList:Persons=[
        {id:'sanyejiejie1',name:'sanzhang',age:60},
        {id:'asdasd',name:'asdasd',age:23},
        {id:'asdasd',name:'ashjd',age:90}
    ]
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