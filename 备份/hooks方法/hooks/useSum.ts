import { ref, reactive,onMounted} from 'vue'
import axois from 'axios'
// https://dog.ceo/api/breed/pembroke/images/random
export default function () {
    //数据
    let sum = ref(0)
    // 方法
    function add() {
        sum.value += 1
    }
    onMounted(()=>{
        sum.value+=100
    })
    // 向外部提供东西
    return {sum,add}
}