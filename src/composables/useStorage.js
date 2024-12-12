import { ref, watch } from 'vue'

export function useStorage(key, defaultValue = null, storage = localStorage) {
  const data = ref(defaultValue)
  const error = ref(null)

  // 初始化数据
  try {
    const value = storage.getItem(key)
    if (value !== null) {
      data.value = JSON.parse(value)
    }
  } catch (err) {
    error.value = err
  }

  // 监听数据变化自动保存
  watch(
    data,
    (newValue) => {
      try {
        if (newValue === null) {
          storage.removeItem(key)
        } else {
          storage.setItem(key, JSON.stringify(newValue))
        }
        error.value = null
      } catch (err) {
        error.value = err
      }
    },
    { deep: true }
  )

  // 清除数据
  const clear = () => {
    data.value = defaultValue
    try {
      storage.removeItem(key)
      error.value = null
    } catch (err) {
      error.value = err
    }
  }

  return {
    data,
    error,
    clear
  }
} 