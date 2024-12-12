import { ref } from 'vue'

export function useClipboard(timeout = 2000) {
  const copied = ref(false)
  const error = ref(null)

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      error.value = null
      
      setTimeout(() => {
        copied.value = false
      }, timeout)
      
      return true
    } catch (err) {
      error.value = err
      copied.value = false
      return false
    }
  }

  return {
    copied,
    error,
    copy
  }
} 