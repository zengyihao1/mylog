<template>
  <div class="article-detail">
    <!-- 文章头图 -->
    <section class="article-hero" data-aos="fade">
      <v-img
        :src="article.cover"
        height="500"
        cover
        class="article-cover"
      >
        <div class="article-overlay d-flex align-end">
          <v-container class="pb-8">
            <v-chip
              color="primary"
              variant="flat"
              class="mb-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {{ article.category }}
            </v-chip>
            <h1
              class="text-h3 text-white font-weight-bold mb-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              {{ article.title }}
            </h1>
            <div
              class="d-flex align-center"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <v-avatar size="40" class="mr-4">
                <v-img :src="article.author.avatar" />
              </v-avatar>
              <div>
                <div class="text-white text-subtitle-1">
                  {{ article.author.name }}
                </div>
                <div class="text-white text-caption">
                  {{ article.date }} · {{ article.readTime }} 分钟阅读
                </div>
              </div>
            </div>
          </v-container>
        </div>
      </v-img>
    </section>

    <!-- 文章内容 -->
    <section class="article-content py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" lg="9">
            <!-- 文章主体 -->
            <div class="article-body" data-aos="fade-up">
              <div class="markdown-body" v-html="article.content" />
            </div>

            <!-- 点赞和分享 -->
            <div class="article-actions d-flex justify-center py-8">
              <v-btn
                icon="mdi-heart"
                size="x-large"
                color="red"
                variant="flat"
                :class="{ 'liked': article.liked }"
                @click="toggleLike"
              >
                <template v-slot:append>
                  <span class="text-body-1 ml-2">{{ article.likes }}</span>
                </template>
              </v-btn>
              <v-btn
                icon="mdi-share-variant"
                size="x-large"
                class="ml-4"
                variant="flat"
                @click="shareArticle"
              />
            </div>

            <!-- 评论区 -->
            <div class="comments-section mt-8">
              <h2 class="text-h5 font-weight-bold mb-6">
                评论 ({{ comments.length }})
              </h2>
              
              <!-- 评论输入框 -->
              <v-card class="mb-8" elevation="0">
                <v-card-text>
                  <v-textarea
                    v-model="newComment"
                    label="写下你的评论"
                    variant="outlined"
                    rows="3"
                  />
                  <v-btn
                    color="primary"
                    :disabled="!newComment.trim()"
                    @click="addComment"
                  >
                    发表评论
                  </v-btn>
                </v-card-text>
              </v-card>

              <!-- 评论列表 -->
              <v-card
                v-for="comment in comments"
                :key="comment.id"
                class="mb-4"
                elevation="0"
                variant="outlined"
              >
                <v-card-text>
                  <div class="d-flex align-start mb-4">
                    <v-avatar size="40" class="mr-4">
                      <v-img :src="comment.avatar" />
                    </v-avatar>
                    <div>
                      <div class="text-subtitle-1 font-weight-medium">
                        {{ comment.username }}
                      </div>
                      <div class="text-caption">
                        {{ comment.date }}
                      </div>
                    </div>
                    <v-spacer />
                    <v-btn
                      icon="mdi-heart"
                      size="small"
                      variant="text"
                      :color="comment.liked ? 'red' : undefined"
                      @click="toggleCommentLike(comment)"
                    >
                      <template v-slot:append>
                        <span class="text-caption ml-1">{{ comment.likes }}</span>
                      </template>
                    </v-btn>
                  </div>
                  <p class="text-body-1">{{ comment.content }}</p>
                </v-card-text>
              </v-card>
            </div>
          </v-col>

          <!-- 侧边栏 -->
          <v-col cols="12" md="4" lg="3">
            <div class="sidebar" data-aos="fade-left">
              <!-- 作者信息 -->
              <v-card class="mb-6" elevation="0" variant="outlined">
                <v-card-text>
                  <div class="text-center">
                    <v-avatar size="80" class="mb-4">
                      <v-img :src="article.author.avatar" />
                    </v-avatar>
                    <h3 class="text-h6 font-weight-bold">
                      {{ article.author.name }}
                    </h3>
                    <p class="text-body-2 text-medium-emphasis">
                      {{ article.author.bio }}
                    </p>
                  </div>
                </v-card-text>
              </v-card>

              <!-- 相关文章 -->
              <v-card elevation="0" variant="outlined">
                <v-card-title>相关文章</v-card-title>
                <v-card-text>
                  <v-list lines="two">
                    <v-list-item
                      v-for="relatedArticle in relatedArticles"
                      :key="relatedArticle.id"
                      :to="`/article/${relatedArticle.id}`"
                      class="mb-2"
                    >
                      <template v-slot:prepend>
                        <v-avatar size="40">
                          <v-img :src="relatedArticle.cover" cover />
                        </v-avatar>
                      </template>
                      <v-list-item-title>
                        {{ relatedArticle.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ relatedArticle.date }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 分享对话框 -->
    <v-dialog v-model="shareDialog" max-width="400">
      <v-card>
        <v-card-title>分享文章</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="platform in sharePlatforms"
              :key="platform.id"
              @click="shareToPlatform(platform.id)"
            >
              <template v-slot:prepend>
                <v-icon :color="platform.color">{{ platform.icon }}</v-icon>
              </template>
              <v-list-item-title>{{ platform.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import 'github-markdown-css'

const route = useRoute()
const shareDialog = ref(false)
const newComment = ref('')

// 模拟文章数据
const article = ref({
  id: 1,
  title: '基于 Vue 3 的现代化博客系统开发详解',
  content: `
    <div class="markdown-body">
      <h2>项目概述</h2>
      <p>这是一个基于现代化前端技术栈开发的个人博客系统，采用了最新的 Vue 3 生态系统和相关工具。本文将详细介绍系统的技术架构、主要功能和实现细节。</p>
      
      <h2>技术栈选择</h2>
      <h3>核心框架</h3>
      <ul>
        <li><strong>Vue 3</strong>：采用 Composition API，提供更好的代码组织和复用能力</li>
        <li><strong>Vite</strong>：新一代前端构建工具，提供极速的开发体验</li>
        <li><strong>Vuetify 3</strong>：Material Design 风格的 UI 组件库</li>
        <li><strong>Vue Router</strong>：Vue.js 官方路由管理器</li>
        <li><strong>Pinia</strong>：新一代状态管理工具</li>
      </ul>

      <h3>样式解决方案</h3>
      <ul>
        <li><strong>SCSS</strong>：采用模块化的 SCSS 架构，使用 @use 语法组织样式代码</li>
        <li><strong>CSS 变量</strong>：实现主题切换和样式复用</li>
        <li><strong>响应式设计</strong>：适配各种设备屏幕</li>
      </ul>

      <h2>项目结构</h2>
      <pre><code>src/
├── assets/
│   ├── styles/
│   │   ├── variables/
│   │   │   ├── _colors.scss
│   │   │   ├── _spacing.scss
│   │   │   ├── _breakpoints.scss
│   │   │   ├── _transitions.scss
│   │   │   └── _shadows.scss
│   │   ├── variables.scss
│   │   └── main.scss
│   └── images/
├── components/
│   ├── common/
│   └── layout/
│       └── AppNavbar.vue
├── composables/
├── router/
├── stores/
├── views/
│   ├── Home.vue
│   ├── Articles.vue
│   ├── ArticleDetail.vue
│   └── Photos.vue
└── utils/</code></pre>

      <h2>主要功能实现</h2>
      
      <h3>1. 响应式导航栏</h3>
      <p>导航栏组件（AppNavbar.vue）实现了以下功能：</p>
      <ul>
        <li>滚动时的透明度和阴影效果变化</li>
        <li>响应式布局，在移动端自动切换为抽屉式菜单</li>
        <li>主题切换功能</li>
        <li>渐变 Logo 效果</li>
      </ul>

      <h3>2. 主题系统</h3>
      <pre><code>const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#82B1FF',
          background: '#FFFFFF'
        }
      },
      dark: {
        colors: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#82B1FF',
          background: '#121212'
        }
      }
    }
  }
})</code></pre>

      <h3>3. 动画效果</h3>
      <p>使用 AOS (Animate On Scroll) 库实现页面滚动动画：</p>
      <pre><code>// 初始化 AOS
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50
})</code></pre>

      <h3>4. 照片墙功能</h3>
      <p>照片墙实现了以下特性：</p>
      <ul>
        <li>瀑布流布局</li>
        <li>图片懒加载</li>
        <li>优雅的悬浮效果</li>
        <li>分类筛选</li>
        <li>点赞功能</li>
      </ul>

      <h3>5. 文章系统</h3>
      <p>文章系统包含：</p>
      <ul>
        <li>分类展示</li>
        <li>评论功能</li>
        <li>点赞系统</li>
        <li>文章分享</li>
        <li>相关文章推荐</li>
      </ul>

      <h2>性能优化</h2>
      <ul>
        <li>路由懒加载</li>
        <li>图片懒加载和优化</li>
        <li>组件按需加载</li>
        <li>样式代码分割</li>
        <li>资源预加载</li>
      </ul>

      <h2>开发体验</h2>
      <p>项目采用了多项提升开发体验的配置：</p>
      <ul>
        <li>Vite 的快速热重载</li>
        <li>ESLint 代码规范</li>
        <li>模块化的 SCSS 架构</li>
        <li>TypeScript 支持</li>
      </ul>

      <h2>部署考虑</h2>
      <ul>
        <li>静态资源优化</li>
        <li>CDN 配置</li>
        <li>SEO 优化</li>
        <li>浏览器兼容性</li>
      </ul>

      <h2>未来展望</h2>
      <p>计划添加的功能和优化：</p>
      <ul>
        <li>服务端渲染 (SSR) 支持</li>
        <li>PWA 支持</li>
        <li>更多的交互动画</li>
        <li>性能监控系统</li>
        <li>国际化支持</li>
      </ul>
    </div>
  `,
  cover: 'https://picsum.photos/seed/tech-blog/1920/1080',
  category: '技术',
  date: '2024-03-20',
  readTime: 15,
  likes: 86,
  liked: false,
  author: {
    name: 'Tech Explorer',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: '全栈开发工程师，热衷于探索最新的前端技术和最佳实践'
  }
})

// 评论数据
const comments = ref([
  {
    id: 1,
    username: 'Alice',
    avatar: 'https://i.pravatar.cc/150?img=5',
    content: '非常详细的文章，学习了！',
    date: '2024-03-15',
    likes: 12,
    liked: false
  },
  {
    id: 2,
    username: 'Bob',
    avatar: 'https://i.pravatar.cc/150?img=8',
    content: '文章写得很好，期待更多内容。',
    date: '2024-03-14',
    likes: 8,
    liked: false
  }
])

// 相关文章
const relatedArticles = ref([
  {
    id: 2,
    title: 'Vue 3 性能优化指南',
    cover: 'https://picsum.photos/seed/article2/800/600',
    date: '2024-03-12'
  },
  {
    id: 3,
    title: 'TypeScript 与 Vue 3',
    cover: 'https://picsum.photos/seed/article3/800/600',
    date: '2024-03-10'
  }
])

// 分享平台
const sharePlatforms = [
  { id: 'weixin', name: '微信', icon: 'mdi-wechat', color: '#07C160' },
  { id: 'weibo', name: '微博', icon: 'mdi-sina-weibo', color: '#E6162D' },
  { id: 'twitter', name: 'Twitter', icon: 'mdi-twitter', color: '#1DA1F2' }
]

// 点赞文章
const toggleLike = () => {
  article.value.liked = !article.value.liked
  article.value.likes += article.value.liked ? 1 : -1
}

// 点赞评论
const toggleCommentLike = (comment) => {
  comment.liked = !comment.liked
  comment.likes += comment.liked ? 1 : -1
}

// 添加评论
const addComment = () => {
  if (!newComment.value.trim()) return
  
  comments.value.unshift({
    id: comments.value.length + 1,
    username: '访客用户',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: newComment.value,
    date: new Date().toLocaleDateString(),
    likes: 0,
    liked: false
  })
  
  newComment.value = ''
}

// 分享文章
const shareArticle = () => {
  shareDialog.value = true
}

const shareToPlatform = (platform) => {
  // 实现分享逻辑
  console.log(`分享到 ${platform}`)
  shareDialog.value = false
}

onMounted(() => {
  // 可以根据 route.params.id 加载具体文章数据
  console.log('文章ID:', route.params.id)
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.article-hero {
  position: relative;
}

.article-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.article-body {
  font-size: 1.1rem;
  line-height: 1.8;
  
  :deep(.markdown-body) {
    background: transparent;
    
    h2 {
      margin-top: 2rem;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(var(--v-border-color), 0.12);
    }
    
    pre {
      background: #f6f8fa;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
  }
}

.article-actions {
  .v-btn {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
    
    &.liked {
      animation: like-animation 0.3s ease;
    }
  }
}

@keyframes like-animation {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.sidebar {
  position: sticky;
  top: 24px;
}
</style> 