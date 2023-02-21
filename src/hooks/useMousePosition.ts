import { ref, onMounted, onUnmounted} from 'vue'

function useMousePosition(){
  // init初始化
  const x = ref(-1)
  const y = ref(-1)
  // 收集鼠标坐标
  const updatePosition = (e: MouseEvent)=>{
    x.value = e.pageX
    y.value = e.pageY
  }
  // 挂载
  onMounted(()=>{
    document.addEventListener('click',updatePosition)
  })
  // 卸载
  onUnmounted(()=>{
    document.removeEventListener('click',updatePosition)
  })
  return {x,y}
}
export default useMousePosition