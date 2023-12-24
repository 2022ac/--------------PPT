import {ref,reactive,onMounted} from 'vue'
import axois from 'axios'
  // https://dog.ceo/api/breed/pembroke/images/random
  //数据
export default function() {
    // 数据
    let dogList=reactive([
        'https://images.dog.ceo/breeds/bluetick/n02088632_793.jpg'
    ])
    // 方法
    async function getDog() {
      // 处理可能的异常
      try {
        let result=await axois.get('https://dog.ceo/api/breeds/image/random')
        dogList.push(result.data.message)
      } catch (error) {
        alert(error)
      }
    }
    onMounted(()=>{
      getDog()
    })
    // 向外部提供东西 数据和方法
    return {dogList,getDog}
}