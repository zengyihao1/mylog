import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

/**
 * 用户设置 Store
 * 管理用户的全局设置，如动画、字体大小等
 */
export const useSettingsStore = defineStore('settings', () => {
  // 用户设置状态
  const settings = ref({
    animations: true,              // 是否启用动画效果
    fontSize: 'medium',           // 字体大小：'small' | 'medium' | 'large'
    language: 'zh-CN',           // 界面语言
    autoPlayVideos: false,       // 是否自动播放视频
    notificationsEnabled: true   // 是否启用通知
  })

  /**
   * 更新设置
   * @param newSettings - 部分或全部新设置
   */
  const updateSettings = (newSettings: Partial<typeof settings.value>) => {
    settings.value = { ...settings.value, ...newSettings }
  }

  // 监听设置变化并持久化到本地存储
  watch(settings, (newSettings) => {
    localStorage.setItem('user-settings', JSON.stringify(newSettings))
  }, { deep: true })

  /**
   * 初始化设置
   * 从本地存储读取设置，如果没有则使用默认值
   */
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