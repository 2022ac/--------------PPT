<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>
<!-- 使用pinia 获取数据  -->
<script lang="ts" setup name="App">
    import {reactive} from 'vue'
    import axios from 'axios'
    import {nanoid} from 'nanoid'
    import {useTalkStore} from '@/store/loveTalk'
    const talkStore=useTalkStore()
    // 方法
    async function getLoveTalk() {
        // // 发请求 下面的写法：连续结构+重命名 
        let {data:{content:title}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        // 把请求回来的字符串 包装成一个对象
        let obj={id:nanoid(),title}
        // 放到数组中
        talkStore.talkList.unshift(obj)
    }
</script>

<style scoped>
    .talk {
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select,button {
        margin: 0 5px;
        height: 30px;
    }
</style>