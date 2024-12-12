import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

/**
 * 主题管理 Store
 * 负责管理应用的主题状态，包括深色/浅色模式和系统主题跟随
 */
export const useThemeStore = defineStore('theme', () => {
  // 是否为深色模式
  const isDark = ref(false)
  // 系统是否为深色模式
  const systemPrefersDark = ref(false)
  // 主题来源：'system' | 'light' | 'dark'
  const themeSource = ref('system')

  // 监听系统主题变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  
  /**
   * 更新系统主题状态
   * 当系统主题改变时调用此函数
   */
  const updateSystemTheme = (e: MediaQueryListEvent | MediaQueryList) => {
    systemPrefersDark.value = e.matches
    if (themeSource.value === 'system') {
      isDark.value = systemPrefersDark.value
    }
  }

  // 初始化系统主题
  systemPrefersDark.value = mediaQuery.matches
  mediaQuery.addEventListener('change', updateSystemTheme)

  /**
   * 设置主题来源
   * @param source - 主题来源：'system' | 'light' | 'dark'
   */
  const setTheme = (source: 'system' | 'light' | 'dark') => {
    themeSource.value = source
    if (source === 'system') {
      isDark.value = systemPrefersDark.value
    } else {
      isDark.value = source === 'dark'
    }
  }

  /**
   * 切换深色/浅色主题
   * 在当前主题的基础上切换
   */
  const toggleTheme = () => {
    isDark.value = !isDark.value
    themeSource.value = isDark.value ? 'dark' : 'light'
  }

  // 监听主题变化并持久化到本地存储
  watch([isDark, themeSource], () => {
    localStorage.setItem('theme-preference', JSON.stringify({
      isDark: isDark.value,
      source: themeSource.value
    }))
  })

  /**
   * 初始化主题
   * 从本地存储读取主题设置，如果没有则使用系统主题
   */
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