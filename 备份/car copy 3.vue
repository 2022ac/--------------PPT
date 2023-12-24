<template>
    <div class="car">
        <!-- v-bind的简写形式就是 :属性="" -->
        <!-- v-bind是单向绑定的 只能由数据流向页面 -->
        <!-- v-model 是双向绑定的 -->
        姓：<input type="text" v-model="firstName"> <br>
        名：<input type="text" v-model="lastName"> <br>
        <button @click="changeFullName">修改名字</button>
        全名：<span>{{ fullName }}</span>
    </div>
</template>

<script lang="ts" setup name="car">
// {{ firstName.slice(0,1).toUpperCase()+firstName.slice(1) }}--{{ lastName }}
    import {ref,reactive,toRefs,computed} from 'vue'
    let firstName=ref('zhang')
    let lastName=ref('san')
    //console.log(firstName,lastName)
    // 这个定义的fullName只是一个计算属性 是只读的
    // let fullName=computed(()=>{
    //     return firstName.value.slice(0,1).
    //     toUpperCase()+firstName.value.slice(1) 
    //     +' '+lastName.value
    // })

    // 这么定义的计算属性就是 可读可写的
    // get() 方法 set() 方法
    let fullName=computed({
        get() {
            return firstName.value.slice(0,1).
            toUpperCase()+firstName.value.slice(1)
            +' '+lastName.value
        },
        //这个val就是变量修改后的内容
        set(val) {
            const [str1,str2]=val.split('-')
            firstName.value=str1
            lastName.value=str2
            console.log('set方法',val)
        }
    })
    function changeFullName() {
        fullName.value='wang-wu'
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