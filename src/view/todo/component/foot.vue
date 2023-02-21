<template>
  <div class="todo-foot">
    <input type="checkbox" >
    已完成{{ complete }} / 全部 {{ count }} 
    <hr>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import { defineComponent, ref  } from 'vue'
export default defineComponent({
  props: {
    complete: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  emits:['custom-event'],
  setup(props,{attrs,slots,emit}){
    // console.log(props,"content",content.attrs,content.slots,content.emit)
    const fn = ()=>{
      console.log("fn")
      emit("custom-event",123)
    }
    return {
      fn
    }
  }
})
</script>

<style>
.todo-foot{
  display: flex;

}
</style>