import { computed, onMounted, onUnmounted, ref } from 'vue'

/**
 * 响应式断点处理组合式函数
 * 用于监听窗口大小变化并返回当前断点信息
 */
export function useBreakpoints() {
  // 存储当前窗口宽度
  const windowWidth = ref(window.innerWidth)

  // 处理窗口大小变化事件
  const onWidthChange = () => windowWidth.value = window.innerWidth

  // 组件挂载时添加窗口大小变化监听
  onMounted(() => window.addEventListener('resize', onWidthChange))
  
  // 组件卸载时移除监听，避免内存泄漏
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  // 计算当前断点类型
  const type = computed(() => {
    if (windowWidth.value < 600) return 'xs'      // 超小屏幕
    if (windowWidth.value < 960) return 'sm'      // 小屏幕
    if (windowWidth.value < 1264) return 'md'     // 中等屏幕
    if (windowWidth.value < 1904) return 'lg'     // 大屏幕
    return 'xl'                                   // 超大屏幕
  })

  // 返回当前窗口宽度和断点类型
  return { 
    width: computed(() => windowWidth.value),
    type 
  }
} 