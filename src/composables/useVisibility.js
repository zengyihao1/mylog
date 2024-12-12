import { ref, onMounted, onUnmounted } from 'vue'

export function useVisibility() {
  const isVisible = ref(!document.hidden)
  const lastVisibleAt = ref(new Date())
  const lastHiddenAt = ref(null)

  const handleVisibilityChange = () => {
    isVisible.value = !document.hidden
    if (isVisible.value) {
      lastVisibleAt.value = new Date()
    } else {
      lastHiddenAt.value = new Date()
    }
  }

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
  })

  onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  })

  return {
    isVisible,
    lastVisibleAt,
    lastHiddenAt
  }
} 