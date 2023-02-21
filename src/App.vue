<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup defineComponent
import { ref  } from 'vue'
import HeadCom from "./components/header.vue"
import FootCom from "./components/footer.vue"
const isHead = ref(true)
const isFoot = ref(false)
components:{
  HeadCom,
  FootCom
}

</script>
<template>
  <div class="app">
    <HeadCom v-if="isHead"></HeadCom>
    <router-link to="/">首页</router-link> |
    <router-link to="family">全家桶</router-link> |
    <router-link to="newAttr">Vue3 新特性</router-link> |
    <router-link to="ts">ts 特性</router-link> 
    <router-view></router-view>
    <FootCom v-if="isFoot"></FootCom>
  </div>
</template>

<style scoped>

</style>
