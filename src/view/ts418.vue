<template>
  <div>
    <h2>ts</h2>
    <p> arr: {{ arr }}/arr2 {{ arr2 }}</p>
    
  </div>
</template>

<script lang="ts" setup>
let arr:Array<number> = [1,2,3]
let arr2:string[] = ['a','b','c']
const fun1 = (a:number,b:number = 0): number => {
  // if(b){
    return a + b
  // }else {
  //   return a
  // }
}
let obj:{
  a:number;
  b:number;
} = {
  a: 1,
  b: 2
}
// console.log( fun1(2) )
// interface 接口-定义数据类型集合
interface Ilist{
  list:{
    id: number;
    name: string;
  }[]
}
interface Idate{
  message: string;
  success: boolean;
  data: Ilist
}
const data:Idate = {
  message: '200',
  success: true,
  data: {
    list: [
      {id: 1, name: '张三'},
      {id: 2, name: '里斯'}
    ]
  }
}
// console.log(data)
//  interface 继承
interface Idata1{
  message: string;
  success: boolean;
  data?: {}
}
interface Ires extends Idata1{ // Ires继承Idata1，合并关系
  childern: [];
}
const data1:Ires = {
  message: '200',
  success: true,
  data: {},
  childern: []
}

// ts 中的 类
class Person{
  protected userName:string; // 受保护的,只能在类或子类中访问或修改。
  readonly userAge:number; // readonly 只读属性
  public  userBody:number; // 默认公开的public
  private userHeight:number; // 私有private,当前类的内部使用
  constructor(name:string, age: number,height:number = 0){
    this.userName = name
    this.userAge = age
    this.userHeight= height
  }
  run():string{
    console.log("跑步" + this.userHeight)
    // this.userName = "wangwu"
    return this.userName
  }
}

var P = new Person('zhangshan', 18, 175)
// P.unseAge = 123 // 只读属性 readonly, 不可重新赋值

// console.log(P.userName)
// console.log(P.run())
class Childern extends Person{
  run():string{
    this.userName = "wangwu111"
    console.log("zilei跑步" )
    return this.userName
  }
}
var P1 = new Childern('lisi', 20)
// console.log(P1.run())

abstract class Db { // 抽象类，不完成某一个东西，把具象的东西抽离出来
  abstract connection():void;
}
class Mysql {
  connection(){
    console.log("zzz找到一个数据")
  }
}


interface N1{   //  
  xing: string;
  ming: string;
}
interface N2{   //  
  change():void;
}
class Name1 implements N1,N2{ // implements 规定类
  xing: string;
  ming: string;
  change(){
    console.log("change")
  }
}
var N = new Name1()
// console.log(N)

// 泛型,不先预先指定，使用时指定类型
let arr3:Array<number> = [1,2,3]
let arr4:Array<string> = ["1","2","3"]
// interface Array
function fn1<T,U>(params:T,a:U):string {
  // console.log(params,a)
  return "adf"
}
fn1<number,string>(1, "a1a")
fn1<string,number>("a2a", 2)
fn1<number[],number>([1,23,4], 3)


function fn2<T extends string | number[]>(params:T):number {
  console.log(params.length)
  return params.length
}
// fn2("12313")
// fn2([1, 2, 3])

interface Idata3{
  length: number
}
function fn3<T extends Idata3>(params:T):number { // T 继承Idata3
  console.log(params.length)
  return params.length
}
// fn3("12313")
fn3<number[]>([1, 2, 3, 4])
fn3<string[]>(['1', '2', '3'])

</script>

<style>

</style>