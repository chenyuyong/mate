<script setup>
import Nav from './component/nav.vue';
import Banner from './component/banner.vue';

import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  home-Nav--
  <Nav/>
  <Banner/>
  <h1>{{ msg }}</h1>




</template>

<style scoped>

</style>
