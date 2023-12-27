<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
                <!-- 第二种写法 不能使用path只能使用name 传参的属性是 params-->
                <!-- 并且不能传对象和数组 -->
                <!-- params 参数传递 -->
                <RouterLink :to="{
                    name:'xiang',
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                }">
                {{ news.title }}
                </RouterLink>
            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView />
        </div>
    </div>
</template>
  

<script setup lang="ts" name="News">
import { ref, reactive } from 'vue'
import { RouterView } from 'vue-router'
const newsList = reactive([
    { id: '01', title: '抗癌食物', content: '西兰花' },
    { id: '02', title: '如何爆发', content: 'find' },
    { id: '03', title: '明天是周一', content: 'sanyejiejie' },
    { id: '04', title: '好消息!', content: '快过年了' }
])
</script>
  
<style scoped>
/* 新闻 */
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
}

.news li::marker {
    color: green;
}

.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>