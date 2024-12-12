<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero-section d-flex align-center">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" data-aos="fade-right">
            <!-- 欢迎文本 -->
            <h1 class="text-h2 font-weight-bold mb-4">
              欢迎来到我的博客
            </h1>
            <p class="text-h6 text-medium-emphasis mb-6">
              这里记录着我的技术探索、设计思考和生活点滴
            </p>
            <!-- 行动按钮 -->
            <v-btn
              color="primary"
              size="x-large"
              to="/articles"
              class="mr-4"
            >
              浏览文章
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
          
          <!-- 装饰图片 -->
          <v-col cols="12" md="6" class="d-none d-md-block" data-aos="fade-left">
            <v-img
              src="@/assets/images/hero-image.svg"
              max-width="500"
              class="mx-auto"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 最新文章区域 -->
    <section class="latest-articles py-16">
      <v-container>
        <h2 class="text-h4 font-weight-bold mb-8 text-center" data-aos="fade-up">
          最新文章
        </h2>
        <v-row>
          <v-col
            v-for="article in latestArticles"
            :key="article.id"
            cols="12"
            md="4"
            data-aos="fade-up"
          >
            <!-- 文章卡片 -->
            <v-card
              :to="`/article/${article.id}`"
              class="article-card h-100"
              elevation="0"
            >
              <v-img
                :src="article.cover"
                height="200"
                cover
                class="rounded-t-lg"
              />
              <v-card-title>{{ article.title }}</v-card-title>
              <v-card-text>
                <p class="text-truncate-2">{{ article.excerpt }}</p>
                <div class="d-flex align-center mt-3">
                  <v-icon size="small" color="primary" class="mr-2">
                    mdi-calendar
                  </v-icon>
                  <span class="text-caption">{{ article.date }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 精选照片区域 -->
    <section class="featured-photos py-16 bg-surface">
      <v-container>
        <h2 class="text-h4 font-weight-bold mb-8 text-center" data-aos="fade-up">
          精选照片
        </h2>
        <v-row class="photo-grid">
          <v-col
            v-for="photo in featuredPhotos"
            :key="photo.id"
            cols="12"
            sm="6"
            md="4"
            data-aos="zoom-in"
          >
            <!-- 照片卡片 -->
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                class="photo-card"
                :elevation="isHovering ? 8 : 0"
              >
                <v-img
                  :src="photo.url"
                  :lazy-src="photo.thumbnail"
                  aspect-ratio="1"
                  cover
                  class="rounded-lg"
                >
                  <!-- 加载占位符 -->
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary" />
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 最新文章数据
const latestArticles = ref([
  {
    id: 1,
    title: '基于 Vue 3 的现代化博客系统开发详解',
    excerpt: '深入探讨使用 Vue 3、Vuetify、Vite 等现代技术栈构建个人博客系统的完整过程...',
    cover: 'https://picsum.photos/seed/tech-blog/800/600',
    date: '2024-03-20'
  },
  // ... 其他文章
])

// 精选照片数据
const featuredPhotos = ref([
  {
    id: 1,
    title: '晨雾中的森林',
    url: 'https://picsum.photos/seed/photo1/800/800',
    thumbnail: 'https://picsum.photos/seed/photo1/400/400'
  },
  // ... 其他照片
])
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

// 英雄区域样式
.hero-section {
  min-height: calc(100vh - 64px);
  position: relative;
  overflow: hidden;
}

// 文章卡片样式
.article-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(var(--v-border-color), 0.12);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  }
}

// 文本截断样式
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

// 照片网格样式
.photo-grid {
  gap: 24px;
}

// 照片卡片样式
.photo-card {
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
}
</style> 