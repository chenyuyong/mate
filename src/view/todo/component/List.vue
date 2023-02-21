<template>
  <div class="todo-list">
    <ul>
      <li v-for="(item  ,key) in props.todoList" :key="key" class="todo-li">
        <div>{{ item.id }}</div>
        <div>{{ item.name }}</div>
        <div>{{ item.age }}</div>
        <div>
          <button @click="delTodo(item.id )"> 删除 </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

import {  reactive, defineProps } from 'vue'
  // props:todoList
const props = defineProps({
  todoList: {
    type: Array,
    default: []
  },
  delTodoFn:{
    type: Function,
    default: function(){}
  }
});
const state = reactive<{todos:Todo []}>({
  todos: [
    {id:1,name:'张三',age:'12',ischeckbox: false},
    {id:2,name:'李四',age:'23',ischeckbox: true},
    {id:3,name:'王五',age:'43',ischeckbox: false},
  ]
})  
// onMounted(() => {
// })

function delTodo(id){
  props.delTodoFn(id)
}


</script>

<style lang="less">
.todo-li{
  display: flex;
  
}
</style>