export default {
  state(){
    return {
      userName: 'zhangsan',
      count: "user",
    }
  },
  getters:{

  },
  mutations:{
    userUpdate(state,value){
      console.log("user1111111")
      state.userName = value
    }
  },
  actions:{
    // async getCount({commit}){
    //   const count = await new Promise((rs)=>{
    //     setTimeout(() => {
    //       rs(parseInt(Math.random()*10))
    //     }, 2000);
    //   })
    //   commit('updata',count)
    // }
  }

}
