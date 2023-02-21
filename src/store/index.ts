import { createStore } from 'vuex'
import user from './modules/user'

const store = createStore({
  state(){
    return {
      counter: "index"
    }
  },
  mutations:{
    update(state,value){
      state.counter = value
    }
  },
  modules:{
    user:user
  }

})
export default store