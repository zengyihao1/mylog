<template>
  <div class="dynamic-background">
    <div 
      v-for="(image, index) in backgroundImages" 
      :key="index"
      class="background-image"
      :style="{ 
        backgroundImage: `url(${image})`,
        opacity: currentIndex === index ? 1 : 0
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const backgroundImages = [
  // 森林系列
  '/src/assets/images/backgrounds/misty-forest.jpg',    // 晨雾缭绕的森林
  '/src/assets/images/backgrounds/sunlit-forest.jpg',   // 阳光穿透树林
  '/src/assets/images/backgrounds/autumn-forest.jpg',   // 金色秋季森林
  '/src/assets/images/backgrounds/green-forest.jpg'     // 翠绿森林
]

const currentIndex = ref(0)
let intervalId = null

const changeBackground = () => {
  currentIndex.value = (currentIndex.value + 1) % backgroundImages.length
}

onMounted(() => {
  intervalId = setInterval(changeBackground, 30000) // 每30秒切换一次背景
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style lang="scss" scoped>
.dynamic-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 2s ease;
  will-change: opacity;
}
</style> 