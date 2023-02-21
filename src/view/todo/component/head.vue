<template>
  <div>
    <input type="text" v-model="val" @keyup.enter="addTodo()"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref ,defineProps } from 'vue'
export default defineComponent({
  props: {
    addTodoFn: {
      type: Function,
      default: function(){}
    }
  },
  setup(props){
    const val = ref('')
    const addTodo = async()=>{
      let text:string = val.value
      if(!text.trim()) return
      const obj = {
        id: Date.now(),
        name: text,
        age:'43',
        ischeckbox: false
      }
      await props.addTodoFn(obj)
      val.value = ''
      // console.log('addTodoFn',val)
    }
    return {
      val,
      addTodo
    }
  }
})
</script>

<style>

</style>