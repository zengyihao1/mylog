import { onMounted, onUnmounted, ref, computed } from 'vue'

export function useScroll() {
  const scrollY = ref(0)
  const scrollDirection = ref('none') // 'up' | 'down' | 'none'
  const lastScrollY = ref(0)

  const onScroll = () => {
    scrollY.value = window.scrollY
    scrollDirection.value = scrollY.value > lastScrollY.value ? 'down' : 'up'
    lastScrollY.value = scrollY.value
  }

  onMounted(() => window.addEventListener('scroll', onScroll))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return {
    scrollY,
    scrollDirection,
    isScrolled: computed(() => scrollY.value > 0)
  }
} 