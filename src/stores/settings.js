import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref({
    animations: true,
    fontSize: 'medium', // 'small' | 'medium' | 'large'
    language: 'zh-CN',
    autoPlayVideos: false,
    notificationsEnabled: true
  })

  // 更新设置
  const updateSettings = (newSettings) => {
    settings.value = { ...settings.value, ...newSettings }
  }

  // 持久化设置
  watch(settings, (newSettings) => {
    localStorage.setItem('user-settings', JSON.stringify(newSettings))
  }, { deep: true })

  // 初始化设置
  const initSettings = () => {
    const saved = localStorage.getItem('user-settings')
    if (saved) {
      settings.value = { ...settings.value, ...JSON.parse(saved) }
    }
  }

  return {
    settings,
    updateSettings,
    initSettings
  }
}) 