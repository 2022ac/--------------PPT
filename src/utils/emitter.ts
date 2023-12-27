// 引入mitt
import mitt from "mitt"
// 调用mitt()得到emitter 能绑定事件和触发事件
const emitter = mitt()
// // 绑定事件
// emitter.on('sanye', () => {
//   console.log('sanye被调用')
// })
// emitter.on('sanye2', () => {
//   console.log('sanye2被调用')
// })

// setInterval(() => {
//   //触发事件
//   emitter.emit('sanye')
//   emitter.emit('sanye2')
// },1000)
// // 暴露emitter

// setTimeout(()=>{
//     // 解绑事件
//     emitter.all.clear()
// },3000)
export default emitter