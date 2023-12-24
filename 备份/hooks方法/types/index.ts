// 定义一个接口 限制person对象的具体属性
export interface PersonInter{
    id:string,
    name:string,
    age:number,
    // 可选的参数
    x?:number
}

// 自定义类型
export type Persons = PersonInter[]