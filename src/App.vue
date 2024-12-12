<template>
  <v-app>
    <!-- 动态背景组件 -->
    <background-image />
    <!-- 背景遮罩层，用于添加模糊和渐变效果 -->
    <div class="background-overlay"></div>
    <!-- 主题同步组件，用于处理主题切换 -->
    <theme-sync />
    <!-- 导航栏组件 -->
    <app-navbar />
    <!-- 主要内容区域 -->
    <v-main>
      <!-- 路由视图，使用过渡动画 -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
// 导入Vuetify主题工具
import { useTheme } from 'vuetify'
// 导入Vue生命周期钩子
import { onMounted } from 'vue'
// 导入自定义组件
import AppNavbar from '@/components/layout/AppNavbar.vue'
import ThemeSync from '@/components/ThemeSync.vue'
import BackgroundImage from '@/components/BackgroundImage.vue'

// 获取Vuetify主题实例
const theme = useTheme()

// 组件挂载时根据系统主题设置初始主题
onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.global.name.value = prefersDark ? 'dark' : 'light'
})
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;

// 设置应用背景为透明，以显示自定义背景
.v-application {
  background: transparent !important;
}

// 背景遮罩层样式
.background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(10px);  // 添加模糊效果
  opacity: 0.1;        // 设置透明度
  z-index: -1;         // 置于底层
  
  // 添加遮罩层，用于调整背景亮度
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--v-background-base);
    opacity: 0.97;
  }
}

// 主题切换动画
.background-overlay,
.background-overlay::after {
  transition: all $transition-speed ease;
}

// 全局滚动条样式
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--v-primary-base);
  border-radius: 4px;
  
  &:hover {
    background: var(--v-accent-base);
  }
}

// 内容区域卡片样式增强
.v-card {
  backdrop-filter: blur(10px);  // 添加毛玻璃效果
  background-color: rgba(var(--v-theme-surface), 0.8) !important;  // 半透明背景
}
</style> 