import { ref, onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'

export function useAnimation(options = {}) {
  const settingsStore = useSettingsStore()
  const isAnimating = ref(false)
  const hasAnimated = ref(false)
  
  const {
    duration = 1000,
    delay = 0,
    once = true,
    threshold = 0.1
  } = options

  const element = ref(null)

  const startAnimation = () => {
    if (once && hasAnimated.value) return
    if (!settingsStore.settings.animations) return
    
    isAnimating.value = true
    setTimeout(() => {
      isAnimating.value = false
      hasAnimated.value = true
    }, duration)
  }

  onMounted(() => {
    if (!element.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAnimation()
          }
        })
      },
      { threshold }
    )

    observer.observe(element.value)
  })

  return {
    element,
    isAnimating,
    hasAnimated,
    startAnimation
  }
} 