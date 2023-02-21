<template>
  <div>
    <p> fristName: <input type="text" v-model="fristName"></p>
    <p>lastName: <input type="text" v-model="lastName"></p>
    <p>fullNama: {{ fullName }}</p>
    <hr>
    <p> strName: <input type="text" v-model="strName"></p>
    <p> watchName: {{ watchName }}</p>
    <hr>
    <p >获取dom 节点 ref
      <input type="text" placeholder="自动聚焦" ref="refInput" >
    </p>
    <hr>
    <p>自定义钩子函数hook，获取点击事件的坐标。 useMousePosition</p>
    <p>1,创建一个函数，函数名必须use开头</p>
    <p>2，函数必须return 一些数据</p>
    <!-- <p>X:{{x }}/ Y :{{ y }}</p> -->
    <hr>
    <h2>   浅响应,shallow 覆盖响应</h2>
    <p>shallowReactive : 只处理对象第一层属性相应</p>
    <p>shallow: 只处有重新赋值时才是响应式(不响应内部数据,只响应整体)</p>
    <p>shallowReactive : {{ m1 }} / : shallowRef:{{ m2 }}  </p>
    <button @click="shallowUpdata"> 更新</button>
    <hr>
    <h2>readonly 深只读,shallowReadoly浅只读</h2>
    <p>readonly -- 1:深度只读,2:设置readonly 后,修改响应式数据会报错</p>
    <p>shallowReadoly -- 1:浅只读,2:设置shallowReadoly后,修改响应式数据的第一层属性会报错</p>
    <p>应用场景: 在某些特定情况下,我们可能不希望对数据进行更新操作,
      那就可以包装生成一个只读代理对象来读取数据,而不能修改或删除</p>
    <hr>
    <h2>toRaw 和 markRaw(标记对象) </h2>
    {{ userRaw }}
    <p> toRaw -- v3 一般以proxy对象存在,这个函数可将他转换成普通v2的对象
      1:返回reactive 或者 readonly 对象的原始数据.
      2:这是一个还原方法,可以用于临时读取,得到的数据还具有响应式
    </p>
    <button @click="toRawFn">toRaw</button>
    <p>markRaw--
      1:标记一个对象,使其不具有响应式
      2:应用场景-2.1有些值不应被设置为响应的,例如复杂的第三方类实例或者Vue对象.
      2.2当渲染具有可能数据源的大列表时,跳过代理转化可以提高性能.
      个人总结:没有标记是proxy对象,标记后的为普通对象
    </p>
    <button @click="markRawFn">markRaw</button>
    <hr>
    <p>isRef: 检查一个值是否为一个ref对象</p>
    <p>isReactive: 检查一个对象是否由 reactive 创建的响应式代理</p>
    <p>isReadonly: 检查一个对象是否由 readonly 创建的只读对象</p>
    <p>isProxt:检查一个对象是否由 reactive 或者 readonly 方法创建的代理</p>
    <hr>
    <p>v-model 绑定vue2是props 接收value,emit(input).
      现在vue3接收modelValue.emit('update:modelValue',props.modelValue)/可自定义字段
    </p>
    <p>.sync 修饰符移除了</p>
    <p>v-if 的优先级比v-for的优先级更高了,可以同时用,但不建议</p>
    <p>v2 - this.$route , v3 useRoute() </p>
    <hr>
  </div>
</template>

<script lang="ts">
import { nextTick } from 'process'
import { defineComponent, watch, watchEffect, toRefs,reactive, 
  computed ,ref, onMounted,nextTick, onUnmounted, shallowReactive,shallowRef,
  toRaw,markRaw,
  } from 'vue'
import useMousePosition from '../hooks/useMousePosition'
export default defineComponent({
  setup(){
    
    
    const user =  reactive({
      fristName:'zhang',
      lastName:'san'
    })
    const refInput = ref<HTMLElement | null>('refInput')
    nextTick(()=>{
      console.log("refInput",refInput)
      refInput.value && refInput.value.focus()
    })
    // onMounted(()=>{
    //   console.log("onMounted",refInput)
    //   refInput.value && refInput.value.focus()
    // })
    const fullName = computed(()=>{
      return user.fristName + " " + user.lastName
    })
    const strName = ref('123')
    const watchName = ref('ad ad')
    
    watch([strName,()=> user.fristName],(newVal,lostVal)=>{
      console.log(newVal,lostVal)
    })
    // watch([()=> user.fristName,()=> user.lastName],(newVal,lostVal)=>{
    //   watchName.value = newVal[0] +" "+ newVal[1]
    //   console.log(newVal)
    // },{
    //   immediate:true
    // })
    watchEffect(()=>{
      watchName.value = user.fristName +" "+ user.lastName
    })
    // const {x,y} = useMousePosition()
    const m1 = shallowReactive({a:1,b:{c:2}})
    const m2 = shallowRef({a:1,b:{c:2}})
    const shallowUpdata = ()=>{
      // m1.b.c += 1 // 无效
      m1.a += 1// 有效

      // m2.value.a += 1 // 无效
      m2.value = {a:123} // 有效

    }
    const userRaw = reactive<any>({
      name:"zhangsan",
      age:12
    })
    const toRawFn = ()=>{
      const user1 = toRaw(userRaw) 
      user1.age++
      console.log("user1",user1)
      console.log("userRaw",userRaw)
    }
    const markRawFn = ()=>{
      const likes:Array<string> = ['a','b']
      // userRaw.likes = likes 
      userRaw.likes = markRaw(likes) // 改变数据,但不再是响应式
      setTimeout(()=>{
        userRaw.likes.push('c')
        console.log("userRaw 后",userRaw.likes)
      },1000)
    }
    return {
      ...toRefs(user),
      fullName,
      strName,
      watchName,
      refInput,
      // x,
      // y,
      m1,
      m2,
      shallowUpdata,
      userRaw,
      toRawFn,
      markRawFn,
    }
  }

})
</script>

<style>

</style>