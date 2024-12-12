<template>
  <div style="display: none"></div>
</template>

<script setup>
import { watch } from 'vue'
import { useTheme } from 'vuetify'
import { useThemeStore } from '@/stores/theme'

const vuetifyTheme = useTheme()
const themeStore = useThemeStore()

// 监听主题变化并同步到 Vuetify
watch(() => themeStore.isDark, (isDark) => {
  vuetifyTheme.global.name.value = isDark ? 'dark' : 'light'
}, { immediate: true })
</script> 