import { createApp } from 'vue'
// import less from 'less'
import './assets/css/app.less'
import App from './App.vue'
import router from './router'
import store from "./store"

createApp(App)
.use(router)
.use(store)
.mount('#app')
// .use(less)
// .use(router)
