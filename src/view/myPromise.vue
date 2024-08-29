<template>
  <div>myPromise</div>
</template>

<script lang="ts" setup>

class MyPromise{
  static pending = "等待";
  static fulfilled = "成功";
  static rejected = "失败";
  then: (resolve: any, reject: any) => void;
  state: string;
  result: string;
  resolveBackList: any[];
  rejectBackList: any[];
  all: ( promiseArr: any[]) => void;
  constructor(fn){
    this.state = MyPromise.pending;
    this.result = ''
    this.resolveBackList = [];
    this.rejectBackList = [];
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      console.log("error===",error);
      
    }
  }
  resolve(result){
    setTimeout(() => {
      if (this.state === MyPromise.pending) {
        this.state = MyPromise.fulfilled;
        // console.log(result,'===',this.result);
        this.result = result;
        console.log(MyPromise.fulfilled, result);
        this.resolveBackList.forEach(item => {
          item(this.result);
        })
      }
    })
  }
  reject(result){
    setTimeout(() => {
      if (this.state === MyPromise.pending) {
        this.state = MyPromise.rejected;
        this.result = result;
        this.rejectBackList.forEach(item => {
          item(this.result);
        })
      }
    });
  }
}
MyPromise.prototype.then = function(onResolve, onReject){
  return new MyPromise((resolve,reject) => {
    onReject = typeof onReject === "function" ? onReject : function(){};
    onResolve = typeof onResolve === "function" ? onResolve : function(){};
    if (this.state === MyPromise.fulfilled) {
      onResolve(this.result);
    }
    if (this.state === MyPromise.rejected) {
      onReject(this.result);
    }
    if ( this.state === MyPromise.pending) {
      this.resolveBackList.push(onResolve);
      this.rejectBackList.push(onReject);
    }
  })
}
MyPromise.prototype.all = function(promiseArr){
  let result:any[] = []
  let index
  return new MyPromise((resolve, reject) => {
    function addData(key, value) {
      result[key] = value
      index++
      if(index === promiseArr.length) {
        resolve(result)
      }
    }
    for(let i = 0; i < promiseArr.length; i++) {
      let current = promiseArr[i]
      console.log(current instanceof MyPromise,"current===", current,"result===", result)
      if(current instanceof MyPromise) {
        current.then(value => addData(i, value), reason => reject(reason))
      } else {
        addData(i, promiseArr[i])
      }
    }
  })
}
console.log("111")
var m:any = new MyPromise((resolve, reject) => {
  console.log("222")
  setTimeout(() => {
    console.log("444")
    // reject('my is m fail');
    resolve('my is m chenggong');
  });
});
// console.log("333")
m.then(
  result => {
    console.log("then result 1", result);
  },
  () => {
    console.log("then result 2");
  }
)

console.log("333")
function p1() {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function() {
      resolve('p1')
    },1000)
  })
}
function p2() {
  return new MyPromise(function (resolve, reject) {
    resolve('p2')
  })
}
m.all(['a', 'b', p1(), p2(), 'c']).then(result => {
  // result -> ['a', 'b', 'p1', 'p2', 'c']
  console.log("ALL==",result)
}, result => {
  console.log(result,'all fail')
})

</script>

<style></style>
