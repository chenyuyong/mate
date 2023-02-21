<template>
  <div>
    <HeadCom :addTodoFn="addTodoFn"></HeadCom>
    <list-com :todoList="todos" :delTodoFn="delTodoFn"></list-com>
    <FootCom 
      :complete="complete" 
      :count="count"
      :msg="123"
      :msg2="454"
      @custom-event="fnCustom"></FootCom>
  </div>
</template>

<script lang="ts">
import { reactive,  toRefs ,ref } from 'vue'
import HeadCom from "./component/head.vue"
import ListCom from "./component/List.vue"
import FootCom from "./component/foot.vue"
import {Todo} from "../../types/todo"

export default {
  components:{
    HeadCom,
    ListCom,
    FootCom
  },
  setup(){
    const str:string = "aaaa"
    const complete = ref(1)
    const count = ref(2)
    // const state = reactive<Todo>({
    const state = reactive<{todos:Todo []}>({
      todos: [
        {id:1,name:'张三',age:12,ischeckbox: false},
        {id:2,name:'李四',age:23,ischeckbox: true},
        {id:3,name:'王五',age:56,ischeckbox: false},
      ]
    })
    const addTodoFn = function(obj:Todo){
      console.log('todo add')
      state.todos.unshift(obj)
    }
    const delTodoFn =  function(id){
      state.todos  = state.todos.filter((item)=>{
        console.log(`asdf`,item.id , id,item.id === id)
        return item.id !== id
      })
      console.log(`delete id11:${id}`,state.todos)
    }
    const fnCustom = function(val){
      console.log("fnCustom",val)
    }
    return {
      // state
      ...toRefs(state),
      addTodoFn,
      delTodoFn,
      fnCustom
    }
  }
 
}
</script>

<style>

</style>