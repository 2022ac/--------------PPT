```js
// setup 中this 是undefined
            //console.log('@@',this)
            // 数据 注意此时的数据不是响应式的
            let name='sanye'
            let age=18
            let tel=122222
            let address='北京昌平区'
            // 方法
            function changeName() {
                name='zhang-san'
            }
            function changeAge() {
                age+=1
            }
            function showTel() {
                alert(tel)
            }
            // 数据和方法交出去 模板才能使用
```