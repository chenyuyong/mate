<script setup>

// import Head from './view/Component/Head.vue';
// import Foot from './view/Component/Foot.vue';
// export default {
//     // components: { Head, Foot },
// }
import Head from './components/Head.vue';
import Foot from './components/Foot.vue';
</script>

<template>
    <Head/>
    <Foot/>
    <img alt="Vue logo" src="./assets/vue.svg" />
    <router-link to='/'> home1</router-link>
    <router-link to='/login'>login1 </router-link>
    <router-view></router-view>
    <!-- <Foot></Foot> -->

</template>

<style scoped>

</style>
