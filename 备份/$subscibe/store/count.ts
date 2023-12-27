import {defineStore} from 'pinia'
export const useCountStore=defineStore('count',{
    // actions里面放置的是一个一个的方法用于响应事件的"动作"
    actions: {
        increment(value:number) {
            // 修改数据
            this.sum+=value
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum:6,
            school:'b站',
            address:'紫竹科技园'
        }
    },
    getters:{
        bigSum(state) {
            return state.sum*10
        },
        upperSchool(state) {
            return state.school.toUpperCase()
        }
    }
})