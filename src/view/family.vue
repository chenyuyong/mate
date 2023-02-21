<template>
  <div>
    <h2>全家桶</h2>
    <!-- <p>{{ route }}</p> -->
    <button @click="goHome">首页</button>
    <hr>
    <h2>  vuex </h2>
    <p>state: {{ count }}</p>
    <p>userName : {{ userName }}</p>
    <button @click="vuexUpdata">更新</button>
  </div>
</template>

<script>
import {defineComponent, toRaw,computed} from "vue"
import { useRoute,useRouter } from "vue-router";
import {useStore} from 'vuex'
export default defineComponent({
  setup(){
    const route = toRaw(useRoute()) 
    console.log("全家桶", route)
    const router = useRouter()
    const goHome = ()=> {
      // console.log(router)
      router.push("/")
    }
    // ------------vuex-----------------
    const store  = useStore();
		console.log("store--",store ); 
   
    const count = computed(()=>{
      return  store.state.counter
    })
    const userName = computed(()=>{
      return  store.state.user.userName
    })
    const vuexUpdata = ()=>{
      store.commit('userUpdate',"li si  ")
    }
    return {
      route,
      goHome,
      count,
      userName,
      vuexUpdata
    }
  }
})
</script>

<style>

</style>