<template>
  <div>
    <h2>ts</h2>
    <p> arr: {{ arr }}/arr2 {{ arr2 }}</p>
    <button @click="fuTest('ad')">fuTest</button>
    <p>uer1:{{ uer1 }}</p>
    <hr>
    <h2>断言</h2>

  </div>
</template>

<script lang="ts">
import { isNull } from "util"
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
    class user2 implements INull {
      name:String = 'zhang san';
      getName():String{
        return this.name
      };
      getNameAdd(): String{
        return this.name + 'Add'

      };
      // this.getName()
    }
    const andNull = (str:String | null)=>{
      return str!.length
    }
    console.log(andNull(''))
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