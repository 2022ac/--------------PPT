<template>
    <!-- watch 和watchEffect -->
    <div class="car">
        <h2>需求:当水温达到60度,或者水位达到80cm时,就给服务器发请求</h2>
        <h2>当前水温{{ temp }}</h2>
        <h2>当前水位{{ height }}</h2>
        <button @click="changeTemp">水温加10℃</button>
        <button @click="changeHeight">高度加10cm</button>
    </div>
</template>

<script lang="ts" setup name="car">
    import {ref,watch,watchEffect} from 'vue'
    let temp=ref(10)
    let height=ref(0)
    function changeTemp() {
        temp.value+=10
    }
    function changeHeight() {
        height.value+=10
    }
    // 监视 watch 监视数据的方法
    // watch([temp,height],(newValue,oldValue)=>{
    //     let [newTemp,newHeight]=newValue
    //     if(newTemp>=60||newHeight>=80) {
    //         console.log('给服务器发请求',newTemp,newHeight)
    //     }
    // })
    
    // watchEffect 实现监视
    watchEffect(()=>{
        if(temp.value>=60||height.value>=80) {
            console.log('给服务器发请求',temp.value,height.value)
        }
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