import {defineStore} from 'pinia'
export const useTalkStore=defineStore('talk',{
    // 真正存储数据的地方
    state() {
        return {
            talkList:[
                {id:'01',title:'woaisanye'},
                {id:'02',title:'sanyejiejie'},
                {id:'03',title:'meisanyemeifahuole'}
            ]
        }
    }
})