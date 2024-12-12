<template>
  <div class="articles">
    <!-- 页面标题区域 -->
    <section class="page-header py-16">
      <v-container>
        <h1 class="text-h3 font-weight-bold text-center mb-6" data-aos="fade-up">
          文章列表
        </h1>
        <!-- 分类筛选 -->
        <v-chip-group
          v-model="selectedCategory"
          class="justify-center mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <v-chip
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
            filter
            variant="elevated"
            :color="selectedCategory === category.id ? 'primary' : undefined"
            :class="{
              'category-chip': true,
              'category-chip--selected': selectedCategory === category.id
            }"
          >
            {{ category.name }}
          </v-chip>
        </v-chip-group>
      </v-container>
    </section>

    <!-- 文章列表 -->
    <section class="article-list pb-16">
      <v-container>
        <v-row>
          <v-col
            v-for="article in filteredArticles"
            :key="article.id"
            cols="12"
            md="6"
            lg="4"
            data-aos="fade-up"
          >
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
              <v-card-title class="pt-4">{{ article.title }}</v-card-title>
              <v-card-text>
                <p class="text-truncate-2">{{ article.excerpt }}</p>
                <v-chip
                  size="small"
                  color="primary"
                  variant="flat"
                  class="mr-2 mt-2"
                >
                  {{ getCategoryName(article.categoryId) }}
                </v-chip>
                <div class="d-flex align-center mt-3">
                  <v-icon size="small" color="primary" class="mr-2">
                    mdi-calendar
                  </v-icon>
                  <span class="text-caption">{{ article.date }}</span>
                  <v-spacer />
                  <v-icon size="small" color="primary" class="mr-2">
                    mdi-thumb-up
                  </v-icon>
                  <span class="text-caption">{{ article.likes }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- 加载更多按钮 -->
        <div class="text-center mt-8">
          <v-btn
            color="primary"
            variant="outlined"
            size="large"
            @click="loadMore"
            :loading="loading"
            data-aos="fade-up"
          >
            加载更多
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 分类数据
const categories = [
  { id: 'all', name: '全部' },
  { id: 'tech', name: '技术' },
  { id: 'design', name: '设计' },
  { id: 'life', name: '生活' }
]

const selectedCategory = ref('all')
const loading = ref(false)

// 模拟文章数据
const articles = ref([
  {
    id: 1,
    title: '基于 Vue 3 的现代化博客系统开发详解',
    excerpt: '深入探讨使用 Vue 3、Vuetify、Vite 等现代技术栈构建个人博客系统的完整过程...',
    cover: 'https://picsum.photos/seed/tech-blog/800/600',
    date: '2024-03-20',
    categoryId: 'tech',
    likes: 86
  },
  {
    id: 2,
    title: '现代 UI 设计趋势',
    excerpt: '2024年的 UI 设计趋势分析，包括玻璃态设计、新拟物风格等最新趋势...',
    cover: 'https://picsum.photos/seed/article2/800/600',
    date: '2024-03-12',
    categoryId: 'design',
    likes: 38
  },
  {
    id: 3,
    title: '程序员的生活方式',
    excerpt: '如何在繁忙的编程工作中保持工作与生活的平衡，享受生活的美好...',
    cover: 'https://picsum.photos/seed/article3/800/600',
    date: '2024-03-10',
    categoryId: 'life',
    likes: 56
  }
])

// 根据分类筛选文章
const filteredArticles = computed(() => {
  if (selectedCategory.value === 'all') {
    return articles.value
  }
  return articles.value.filter(article => article.categoryId === selectedCategory.value)
})

// 获取分类名称
const getCategoryName = (categoryId) => {
  const category = categories.find(c => c.id === categoryId)
  return category ? category.name : ''
}

// 加载更多文章
const loadMore = async () => {
  loading.value = true
  // 模拟异步加载
  await new Promise(resolve => setTimeout(resolve, 1000))
  // 添加新文章
  articles.value.push(
    {
      id: articles.value.length + 1,
      title: '新的文章标题',
      excerpt: '这是一篇新加载的文章摘要...',
      cover: `https://picsum.photos/seed/article${articles.value.length + 1}/800/600`,
      date: '2024-03-01',
      categoryId: 'tech',
      likes: Math.floor(Math.random() * 50) + 10
    }
  )
  loading.value = false
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.page-header {
  background: linear-gradient(to right, rgba($primary-color, 0.1), rgba($accent-color, 0.1));
}

.article-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(var(--v-border-color), 0.12);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  }
}

.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.category-chip {
  color: rgb(var(--v-theme-on-surface)) !important;
  
  &--selected {
    color: white !important;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style> 