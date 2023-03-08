<template>
  <div>
    <h2>ts</h2>
    <p> arr: {{ arr }}/arr2 {{ arr2 }}</p>
    <button @click="fuTest('ad')">fuTest</button>
    <p>uer1:{{ uer1 }}</p>
    <hr>
    <h2>断言</h2>
    <hr>
    <p>通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)</p>
    <p>// 泛型：可以支持不特定的数据类型   要求：传入的参数和返回的参数一直</p>
  </div>
</template>

<script lang="ts">
import {defineComponent, } from "vue"

export default defineComponent({
  setup(){
    let arr:Array<number> = [1,2,3]
    let arr2:string[] = ['a','b','c']
    let _un:undefined = undefined
    let _unll:null = null
    let fuTest = (str:string):number=>{
      console.log("fuTest",str)
      return 123
    }
    // 定义接口-
    interface IB {
      name:String
    }
    interface IC{
      age:Number
    }
    interface ID extends IB,IC{
      sex:String,
      hobby:Array<string>
    }
    const uer1:IB & IC ={
      name:'zhang',
      age: 1,
      // sex:'nan',
      // hobby:['a']
    }
    // 断言
    interface INull{
      name:String;
      getName():String;
      getNameAdd:()=> String;
    }
    class User2<T> {
      name:T = 'zhang san';
      getName():T{
        return this.name
      };
      getNameAdd(): T{
        return this.name + 'Add'
      };
    }
    let u2 = new User2<string>()
    u2.name = "li si"
    console.log("class---",u2.getName())

    const andNull = (str:String | null):Number=>{
      return str!.length
    }
    console.log(andNull('sdaf'))

    // 泛型
    function getData<T>(value:T):T{
      return value;
    }
    getData<number>(123);
    console.log("泛型",getData<String>('123'))
    // 枚举
    enum Color {
      red,
      green='3',
      yellow=3
    }
    console.log("枚举",Color.red,Color.yellow,Color[0])
    enum Err {'undefined'=-1,'null'=-2,'success'=1};
    var e:Err=Err.success;
    console.log("Err",e);
    return {
      arr,
      arr2,
      fuTest,
      uer1,
    }
  }
})
</script>

<style>

</style>