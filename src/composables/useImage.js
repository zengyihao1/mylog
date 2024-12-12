import { ref } from 'vue'

export function useImage() {
  const isLoading = ref(false)
  const error = ref(null)

  const loadImage = (src) => {
    isLoading.value = true
    error.value = null

    return new Promise((resolve, reject) => {
      const img = new Image()
      
      img.onload = () => {
        isLoading.value = false
        resolve(img)
      }
      
      img.onerror = (e) => {
        isLoading.value = false
        error.value = e
        reject(e)
      }

      img.src = src
    })
  }

  return {
    isLoading,
    error,
    loadImage
  }
} 