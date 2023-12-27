<template>
    <div class="home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>
</template>
  
<script setup lang="ts" name="Home">
    import {onMounted} from 'vue'
    import {useRouter} from 'vue-router'
    const router=useRouter();
    // // 编程式导航使用频率 远大于 RouterLink 的使用频率
    // onMounted(()=>{
    //     setTimeout(()=>{
    //         // 在此处 编写代码 让路由进行跳转
    //         router.push('/news')
    //     },3000)
    // })
</script>
  
<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>