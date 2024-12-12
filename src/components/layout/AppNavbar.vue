<template>
  <!-- 顶部导航栏 -->
  <v-app-bar
    :elevation="isScrolled ? 2 : 0"
    :color="isScrolled ? 'background' : 'transparent'"
    class="px-4 app-navbar"
  >
    <!-- 网站标题/Logo -->
    <v-app-bar-title class="font-weight-bold">
      <router-link to="/" class="text-decoration-none">
        <span class="gradient-text">Blog</span>
      </router-link>
    </v-app-bar-title>

    <v-spacer />

    <!-- 桌面端导航链接 -->
    <div class="hidden-sm-and-down">
      <v-btn
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        variant="text"
        class="mx-2 text-none"
      >
        <v-icon :icon="item.icon" class="mr-2" />
        {{ item.title }}
      </v-btn>
    </div>

    <!-- 主题切换按钮 -->
    <v-btn
      icon
      variant="text"
      class="ml-4"
      @click="toggleTheme"
    >
      <v-icon>
        {{ themeStore.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
      </v-icon>
    </v-btn>

    <!-- 移动端菜单按钮 -->
    <v-btn
      icon
      variant="text"
      class="hidden-md-and-up ml-4"
      @click="drawer = !drawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- 移动端导航抽屉 -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :prepend-icon="item.icon"
        :title="item.title"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

// 获取主题状态管理实例
const themeStore = useThemeStore()
// 控制移动端导航抽屉的显示状态
const drawer = ref(false)
// 控制导航栏是否处于滚动状态
const isScrolled = ref(false)

// 导航项配置
const navItems = [
  { title: '首页', path: '/', icon: 'mdi-home' },
  { title: '文章', path: '/articles', icon: 'mdi-post' },
  { title: '照片墙', path: '/photos', icon: 'mdi-image' },
  { title: '设置', path: '/settings', icon: 'mdi-cog' }
]

// 切换主题
const toggleTheme = () => {
  themeStore.toggleTheme()
}

// 处理滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// 组件挂载时添加滚动监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 组件卸载时移除滚动监听
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

// 导航栏过渡动画
.app-navbar {
  transition: all $transition-speed ease;
}

// Logo文字渐变效果
.gradient-text {
  background: linear-gradient(45deg, $primary-color, $accent-color);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
}
</style> 