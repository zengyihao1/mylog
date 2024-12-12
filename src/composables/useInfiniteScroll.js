import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 无限滚动组合式函数
 * @param {Function} loadMore - 加载更多数据的函数
 * @param {Object} options - 配置选项
 * @param {number} options.threshold - 触发加载的阈值（距离底部的像素值）
 * @param {boolean} options.immediate - 是否立即检查并加载
 * @param {boolean} options.disabled - 是否禁用无限滚动
 */
export function useInfiniteScroll(loadMore, options = {}) {
  // 解构配置选项，设置默认值
  const {
    threshold = 100,    // 默认阈值100px
    immediate = true,   // 默认立即检查
    disabled = false    // 默认启用
  } = options

  // 加载状态标志
  const loading = ref(false)
  // 是否已加载全部数据
  const finished = ref(false)

  /**
   * 检查是否需要加载更多数据
   * 当滚动到接近底部时触发加载
   */
  const checkScroll = async () => {
    // 如果正在加载、已加载完或被禁用，则不处理
    if (loading.value || finished.value || disabled) return

    // 计算是否达到加载阈值
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY
    const clientHeight = window.innerHeight

    if (scrollHeight - scrollTop - clientHeight < threshold) {
      loading.value = true
      try {
        // 调用加载函数，并根据返回值决定是否已加载完全部数据
        const hasMore = await loadMore()
        finished.value = !hasMore
      } finally {
        loading.value = false
      }
    }
  }

  // 组件挂载时添加滚动监听
  onMounted(() => {
    window.addEventListener('scroll', checkScroll)
    // 如果配置为立即检查，则立即执行一次
    if (immediate) checkScroll()
  })

  // 组件卸载时移除监听
  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  })

  // 返回加载状态和完成状态
  return {
    loading,
    finished,
    checkScroll
  }
} 