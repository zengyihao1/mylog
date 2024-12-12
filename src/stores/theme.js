import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)
  const systemPrefersDark = ref(false)
  const themeSource = ref('system') // 'system' | 'light' | 'dark'

  // 监听系统主题变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  
  const updateSystemTheme = (e) => {
    systemPrefersDark.value = e.matches
    if (themeSource.value === 'system') {
      isDark.value = systemPrefersDark.value
    }
  }

  // 初始化系统主题
  systemPrefersDark.value = mediaQuery.matches
  mediaQuery.addEventListener('change', updateSystemTheme)

  // 设置主题
  const setTheme = (source) => {
    themeSource.value = source
    if (source === 'system') {
      isDark.value = systemPrefersDark.value
    } else {
      isDark.value = source === 'dark'
    }
  }

  // 切换主题
  const toggleTheme = () => {
    isDark.value = !isDark.value
    themeSource.value = isDark.value ? 'dark' : 'light'
  }

  // 持久化主题设置
  watch([isDark, themeSource], () => {
    localStorage.setItem('theme-preference', JSON.stringify({
      isDark: isDark.value,
      source: themeSource.value
    }))
  })

  // 初始化主题
  const initTheme = () => {
    const saved = localStorage.getItem('theme-preference')
    if (saved) {
      const { source } = JSON.parse(saved)
      setTheme(source)
    } else {
      setTheme('system')
    }
  }

  return {
    isDark,
    systemPrefersDark,
    themeSource,
    setTheme,
    toggleTheme,
    initTheme
  }
}) 