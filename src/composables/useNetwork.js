import { ref, onMounted, onUnmounted } from 'vue'

export function useNetwork() {
  const isOnline = ref(true)
  const offlineAt = ref(null)
  const onlineAt = ref(null)
  const downlink = ref(null)
  const saveData = ref(false)
  const effectiveType = ref(null)

  const updateNetworkInfo = () => {
    if ('connection' in navigator) {
      const connection = navigator.connection
      downlink.value = connection.downlink
      saveData.value = connection.saveData
      effectiveType.value = connection.effectiveType
    }
  }

  const handleOnline = () => {
    isOnline.value = true
    onlineAt.value = new Date()
    updateNetworkInfo()
  }

  const handleOffline = () => {
    isOnline.value = false
    offlineAt.value = new Date()
  }

  onMounted(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    if ('connection' in navigator) {
      navigator.connection.addEventListener('change', updateNetworkInfo)
    }
    updateNetworkInfo()
  })

  onUnmounted(() => {
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)
    if ('connection' in navigator) {
      navigator.connection.removeEventListener('change', updateNetworkInfo)
    }
  })

  return {
    isOnline,
    offlineAt,
    onlineAt,
    downlink,
    saveData,
    effectiveType
  }
} 